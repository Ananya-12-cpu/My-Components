'use client'

import { useRef, useState } from 'react'
import { TbBold, TbCheck, TbCopy, TbH1, TbH2, TbItalic, TbTrash } from 'react-icons/tb'
import BackLink from '../components/BackLink'

const inline = (text: string) =>
  text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')

const renderMarkdown = (markdown: string) =>
  markdown
    .split('\n')
    .map((line) => {
      if (line.startsWith('## ')) return `<h2>${inline(line.slice(3))}</h2>`
      if (line.startsWith('# ')) return `<h1>${inline(line.slice(2))}</h1>`
      if (line.trim() === '') return '<br />'
      return `<p>${inline(line)}</p>`
    })
    .join('')

const DEFAULT_MARKDOWN = `# Welcome

Start typing your **markdown** here and see it *previewed* live.`

const panelClass = 'rounded-2xl border border-white/10 bg-white/5 overflow-hidden shadow-lg'
const buttonClass =
  'flex items-center justify-center h-9 w-9 rounded-lg border border-white/10 bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 transition active:scale-95'

const MarkdownPreviewPage = () => {
  const [markdown, setMarkdown] = useState(DEFAULT_MARKDOWN)
  const [copied, setCopied] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  // Wrap the selection in `mark` (bold/italic), or prefix the current line when `line` is true (headings).
  const format = (mark: string, line = false) => {
    const textarea = textareaRef.current
    if (!textarea) return

    const { selectionStart: start, selectionEnd: end, value } = textarea
    const lineStart = value.lastIndexOf('\n', start - 1) + 1

    setMarkdown(
      line
        ? value.slice(0, lineStart) + mark + value.slice(lineStart)
        : value.slice(0, start) + mark + value.slice(start, end) + mark + value.slice(end),
    )

    requestAnimationFrame(() => {
      textarea.focus()
      textarea.setSelectionRange(start + mark.length, (line ? start : end) + mark.length)
    })
  }

  const handleCopy = async () => {
    await navigator.clipboard.writeText(markdown)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  const tools = [
    { label: 'Heading 1', icon: <TbH1 size={18} />, onClick: () => format('# ', true) },
    { label: 'Heading 2', icon: <TbH2 size={18} />, onClick: () => format('## ', true) },
    { label: 'Bold', icon: <TbBold size={18} />, onClick: () => format('**') },
    { label: 'Italic', icon: <TbItalic size={18} />, onClick: () => format('*') },
  ]

  const trimmed = markdown.trim()
  const words = trimmed ? trimmed.split(/\s+/).length : 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white px-4 sm:px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <BackLink />
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
            Markdown Preview
          </h1>
          <p className="text-gray-400 text-sm">Write on the left, see it rendered live on the right.</p>
        </div>

        <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
          <div className="flex gap-1.5">
            {tools.map(({ label, icon, onClick }) => (
              <button key={label} type="button" title={label} aria-label={label} onClick={onClick} className={buttonClass}>
                {icon}
              </button>
            ))}
          </div>

          <div className="flex gap-1.5">
            <button
              type="button"
              title={copied ? 'Copied' : 'Copy'}
              aria-label="Copy"
              onClick={handleCopy}
              className={`${buttonClass} ${copied ? 'text-emerald-300' : ''}`}
            >
              {copied ? <TbCheck size={18} /> : <TbCopy size={18} />}
            </button>
            <button
              type="button"
              title="Clear"
              aria-label="Clear"
              onClick={() => setMarkdown('')}
              className={`${buttonClass} hover:text-red-300`}
            >
              <TbTrash size={18} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={panelClass}>
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10 text-xs font-semibold uppercase tracking-wide text-gray-400">
              Editor
              <span className="normal-case font-normal text-gray-500">
                {words} words · {markdown.length} chars
              </span>
            </div>
            <textarea
              ref={textareaRef}
              value={markdown}
              onChange={(e) => setMarkdown(e.target.value)}
              spellCheck={false}
              placeholder="Write markdown here..."
              className="w-full h-[55vh] bg-transparent p-4 text-gray-100 font-mono text-sm leading-relaxed resize-none focus:outline-none"
            />
          </div>

          <div className={panelClass}>
            <div className="px-4 py-2.5 border-b border-white/10 text-xs font-semibold uppercase tracking-wide text-gray-400">
              Preview
            </div>
            <div
              className="h-[55vh] overflow-y-auto p-4 text-gray-300 leading-relaxed [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:text-white [&_h1]:mb-3 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-gray-200 [&_h2]:mb-2 [&_p]:mb-3 [&_strong]:font-bold [&_strong]:text-white [&_em]:italic"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(markdown) }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MarkdownPreviewPage

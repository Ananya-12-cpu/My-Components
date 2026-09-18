'use client'

import { useState } from 'react'
import { TbRefresh } from 'react-icons/tb'
import BackLink from '../components/BackLink'

type Player = 'X' | 'O'
type Cell = Player | null

const WINNING_LINES = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    
    [0, 4, 8],
    [2, 4, 6],
]

const getWinningLine = (board: Cell[]) =>
    WINNING_LINES.find(([a, b, c]) => board[a] && board[a] === board[b] && board[a] === board[c])

const TictactoePage = () => {
    const [board, setBoard] = useState<Cell[]>(Array(9).fill(null))
    const [isXNext, setIsXNext] = useState(true)

    const winningLine = getWinningLine(board)
    const winner = winningLine ? board[winningLine[0]] : null
    const isDraw = !winner && board.every(Boolean)
    const currentPlayer: Player = isXNext ? 'X' : 'O'

    const handleClick = (index: number) => {
        if (board[index] || winner) return
        const next = [...board]
        next[index] = currentPlayer
        setBoard(next)
        setIsXNext(!isXNext)
    }

    const resetGame = () => {
        setBoard(Array(9).fill(null))
        setIsXNext(true)
    }

    const playerColor = (player: Cell) => (player === 'X' ? 'text-pink-400' : 'text-indigo-400')

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white flex flex-col items-center justify-center px-4 py-12">
            <div className="w-full max-w-md">
                <BackLink />

                <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-10 shadow-xl text-center">
                    <h1 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
                        Tic Tac Toe
                    </h1>

                    <p className="text-lg font-medium mb-6 h-7">
                        {winner ? (
                            <>
                                Winner: <span className={`font-bold ${playerColor(winner)}`}>{winner}</span>
                            </>
                        ) : isDraw ? (
                            <span className="text-gray-300">It&apos;s a draw!</span>
                        ) : (
                            <>
                                Next turn:{' '}
                                <span className={`font-bold ${playerColor(currentPlayer)}`}>{currentPlayer}</span>
                            </>
                        )}
                    </p>

                    <div className="grid grid-cols-3 gap-3 mb-8">
                        {board.map((cell, index) => {
                            const isWinningCell = winningLine?.includes(index)
                            return (
                                <button
                                    key={index}
                                    onClick={() => handleClick(index)}
                                    disabled={!!cell || !!winner}
                                    aria-label={`Cell ${index + 1}${cell ? `, ${cell}` : ''}`}
                                    className={`aspect-square rounded-xl border text-5xl font-bold transition-all disabled:cursor-not-allowed ${
                                        isWinningCell
                                            ? 'bg-emerald-500/20 border-emerald-400/60'
                                            : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-purple-400/40'
                                    } ${playerColor(cell)}`}
                                >
                                    {cell}
                                </button>
                            )
                        })}
                    </div>

                    <button
                        onClick={resetGame}
                        className="inline-flex items-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-400/40 text-white px-5 py-2.5 rounded-lg font-medium transition-all"
                    >
                        <TbRefresh size={18} />
                        New Game
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TictactoePage

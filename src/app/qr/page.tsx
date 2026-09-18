'use client'

import React from 'react';
import { useQRCode } from 'next-qrcode';
import BackLink from '../components/BackLink';

function QRPage() {
  const { Canvas } = useQRCode();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-sm">
        <BackLink />

        <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl text-center">
          <h1 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
            QR Code
          </h1>
          <div className="inline-block p-4 bg-white rounded-xl">
            <Canvas
              text={'https://github.com/bunlong/next-qrcode'}
              options={{
                errorCorrectionLevel: 'M',
                margin: 3,
                scale: 4,
                width: 200,
                color: {
                  dark: '#010599FF',
                  light: '#FFBF60FF',
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default QRPage;
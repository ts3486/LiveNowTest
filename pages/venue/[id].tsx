import React, { useState } from 'react';
import Image from 'next/image';
import coverImage from '@/public/images/john-matychuk-gUK3lA3K7Yo-unsplash.jpg';
import Modal from '@/components/molecules/Modal/Modal';
import ModalApply from '@/components/organisms/ModalApply/ModalApply';

export default function Venue() {
  return (
    <div>
      <section className='px-64 pt-12 mb-20'>
        <h1 className='text-5xl mb-6 font-bold'>会場名</h1>
        <div className='flex'>
          <Image className='w-full' src={coverImage} alt='Sunset in the mountains' height={500} width={800} />

          <div className='flex flex-col justify-between'>
            <Image className='w-full ' src={coverImage} alt='Sunset in the mountains' height={270} width={500} />
            <Image className='w-full' src={coverImage} alt='Sunset in the mountains' height={270} width={500} />
          </div>
        </div>
      </section>
      <section className='px-64 py-12s'>
        <div className='mb-20'>
          <h3 className='text-4xl mb-3 font-bold'>会場概要</h3>
          <div className='flex flex-col justify-between my-6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos aliquam aspernatur nam, impedit labore
            placeat, omnis consequatur rerum animi cumque libero? Delectus, voluptas itaque suscipit ratione quaerat
            sequi officia!
          </div>
        </div>
        <div className='mb-20'>
          <h3 className='text-4xl mb-3 font-bold'>サポートオプション</h3>
          <div className='flex flex-col justify-between my-6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos aliquam aspernatur nam, impedit labore
            placeat, omnis consequatur rerum animi cumque libero? Delectus, voluptas itaque suscipit ratione quaerat
            sequi officia!
          </div>
        </div>
      </section>
      <section className='px-64 py-12s'>
        <h3 className='text-4xl mb-3 font-bold'>会場カレンダー</h3>
        <iframe
          src='https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FTokyo&src=c2hpbW9tdXJhQHNvdXJjZS1tYWtlci5jby5qcA&src=amEuamFwYW5lc2UjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%230B8043&color=%2333B679'
          width='100%'
          height='600'
          scrolling='no'></iframe>

        <div className='m-6'></div>
      </section>
      <section className='px-64 py-12s my-5'>
        <Modal title='申し込み'>
          <ModalApply />
        </Modal>
      </section>
    </div>
  );
}

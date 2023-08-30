import Image from 'next/image';
import { ImgHomeMain } from '../../public/assets/images';
import { IcOtherReadBook, IcTeamHistoryCheck } from '../../public/assets/icons';

export default function Home() {
  return (
    <main >
        <div className='grid gap-[100px] pt-[100px] px-[290px] pb-[150px]'>
            <div className='img-home'>
              <Image src={ImgHomeMain} alt='image home main'/>
            </div>
            
            <div className='check-team-history h-[434px] pt-[40px] px-[75px] bg-primary-sub rounded-[30px]'>
              <div className='flex items-center gap-[8px]'>
                <Image src={IcTeamHistoryCheck} alt="team history check" />
                <span className='text-2xl font-semibold'>팀원이 남긴 독서 기록을 지금 확인해보세요!</span>
              </div>
            </div>

            <div>
              <div className='flex items-center gap-[8px]'>
                  <Image src={IcOtherReadBook} alt="other team read a book" />
                  <span className='text-2xl font-semibold'>다른 피서인은 이런 책을 읽었어요!</span>
              </div>
            </div>
        </div>
    </main>
  )
}

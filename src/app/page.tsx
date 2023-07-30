import Image from 'next/image';
import styles from './page.module.css';
import { NavMenu } from '@/components/NavMenu/NavMenu';
import {
  SectionFour,
  SectionOne,
  SectionSeven,
  SectionSix,
  SectionThree,
  SectionTwo,
  SectionFive,
  Steps,
  FeedBack,
} from '@/components';
import RunningLine from '@/components/UI/RunningLine';
import Footer from '@/components/Footer';
import Articles from '@/components/Articles';
import Hexagons from '@/components/UI/Hexagons';

export default function Home() {
  return (
    <main className={styles.main}>
      <Hexagons />
      <RunningLine />
      <NavMenu />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Steps />
      <SectionSix />
      <SectionSeven />
      <Articles />
      <FeedBack />
      <Footer />
    </main>
  );
}

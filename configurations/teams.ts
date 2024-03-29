import { StaticImageData } from 'next/image';
import chesterImg from '@/assets/sw23-staff-avatar/chester.png';
import ChunYuTsengImg from '@/assets/sw23-staff-avatar/chun-yu-tseng.jpg';
import enImg from '@/assets/sw23-staff-avatar/en.jpeg';
import enzoImg from '@/assets/sw23-staff-avatar/enzo.jpeg';
import liAnChenImg from '@/assets/sw23-staff-avatar/li-an-chen.jpg';
import liangBoWangImg from '@/assets/sw23-staff-avatar/liang-bo-wang.jpg';
import liliImg from '@/assets/sw23-staff-avatar/lili.jpg';
import manusnKuoImg from '@/assets/sw23-staff-avatar/manusn-kuo.jpg';
import marsImg from '@/assets/sw23-staff-avatar/mars.jpg';
import peterWolfImg from '@/assets/sw23-staff-avatar/peter-wolf.png';
import shuhsiLinImg from '@/assets/sw23-staff-avatar/shuhsi-lin.jpg';
import timHsuImg from '@/assets/sw23-staff-avatar/tim-hsu.jpeg';
import wuxianImg from '@/assets/sw23-staff-avatar/wuxian.png';
import yycImg from '@/assets/sw23-staff-avatar/yyc.jpeg';
import jennyImg from '@/assets/sw23-staff-avatar/jenny.jpeg';
import yuHsunLeeImg from '@/assets/sw23-staff-avatar/yu-hsun-lee.jpeg';
import zonghanxieImg from '@/assets/sw23-staff-avatar/zonghanxie.jpeg';
import yukoImg from '@/assets/sw23-staff-avatar/yuko.jpeg';
import mingJieImg from '@/assets/sw23-staff-avatar/ming-jie.jpg';
import steveImg from '@/assets/sw23-staff-avatar/steve.jpg';

type TeamType = {
  title: string;
  members: MemberProps[];
};

type MemberProps = {
  name: string;
  email?: string;
  image?: StaticImageData;
};

const teams: TeamType[] = [
  {
    title: 'Core Team',
    members: [
      {
        name: 'Yung-Yu Chen',
        email: 'yyc@sciwork.dev',
        image: yycImg,
      },
      {
        name: 'Shu-Hsi Lin',
        email: 'suci@sciwork.dev',
        image: shuhsiLinImg,
      },
      {
        name: 'Robert Lin',
        email: 'rlin@sciwork.dev',
      },
      {
        name: 'Chester Cheng',
        email: 'chester@sciwork.dev',
        image: chesterImg,
      },
      {
        name: 'Jenny Yen',
        email: 'jennyyen@sciwork.dev',
        image: jennyImg,
      },
    ],
  },
  {
    title: 'Program',
    members: [
      { name: 'Shu-Hsi Lin', image: shuhsiLinImg },
      { name: 'Yu-Hsun Lee', image: yuHsunLeeImg },
      { name: 'Zong-han Xie', image: zonghanxieImg },
      { name: 'Huei-Yuan Su (Mars)', image: marsImg },
      {
        name: 'Li-An Chen',
        image: liAnChenImg,
      },
    ],
  },
  {
    title: 'Reviewer',
    members: [
      { name: 'Yung-Yu Chen', image: yycImg },
      { name: 'Shu-Hsi Lin', image: shuhsiLinImg },
      { name: 'Yu-Hsun Lee', image: yuHsunLeeImg },
      { name: 'Zong-Han Xie', image: zonghanxieImg },
      { name: 'Huei-Yuan Su (Mars)', image: marsImg },
      {
        name: 'Li-An Chen',
        image: liAnChenImg,
      },
      { name: 'Liang-Bo Wang', image: liangBoWangImg },
      { name: 'Kunxian Huang' },
      {
        name: 'Wen-Chung Hsu (Tim)',
        image: timHsuImg,
      },
      { name: 'Chun-Yu Tseng (Joe)', image: ChunYuTsengImg },
      {
        name: 'Wang Wen-jet (Peter. w)',
        image: peterWolfImg,
      },
      { name: 'Alyssa Chen' },
      {
        name: 'Chung-Pu Chang (Enzo)',
        image: enzoImg,
      },
      {
        name: 'Mansun Kuo',
        image: manusnKuoImg,
      },
      { name: 'Chia-Liang Kao' },
      { name: 'Edward Hong' },
      { name: 'Carter Lin' },
      { name: 'Rendy Kuo' },
      { name: 'Li-Ho Hsu (Daren)' },
    ],
  },
  {
    title: 'Web & Design',
    members: [
      { name: 'Chaster Cheng', image: chesterImg },
      { name: 'Wuxian', image: wuxianImg },
      { name: 'Lili', image: liliImg },
      { name: 'Steve', image: steveImg },
      { name: 'tN' },
      { name: 'EN', image: enImg },
    ],
  },
  {
    title: 'Finance & Venue',
    members: [
      { name: 'Robert' },
      { name: 'Jenny', image: jennyImg },
      { name: 'Shanyen' },
      { name: 'Vera' },
    ],
  },
  {
    title: 'Registration',
    members: [{ name: 'Ming-Jie', image: mingJieImg }],
  },
  {
    title: 'Venue',
    members: [
      { name: 'Terry' },
      { name: 'Yu-Fang(Yuko) Hu', image: yukoImg },
      { name: 'Rex' },
      { name: 'Ting-Yu' },
    ],
  },
];

export default teams;

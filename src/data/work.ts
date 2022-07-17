import { WorkHistoryItem } from '@/components/WorkHistory';

const workData: WorkHistoryItem[] = [
  {
    companyName: '北京句子互动科技有限公司',
    time: '2022.02-2022.06',
    job: '前端开发',
    desc: [
      '在职期间参与开发公司内部后台管理系统，项目是一套完整的公司内部运维人员管理代理商与客户的系统。',
      '使用到的相关技术为React,TypeScript ,Ant Design。',
      '负责项目的相关组件实现以及部分后端代码的编写。',
    ],
  },
  {
    companyName: '天津大拇指科技发展有限公司',
    time: '2021.05-2021.08',
    job: '全栈开发',
    desc: [
      '公司主要做的是家政服务线上预约系统，本人独立负责所有小程序相关业务的开发。',
      '使用UNI-APP+VUE.js开发夸端应用。',
    ],
  },
];

export default workData;

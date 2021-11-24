import { ReactComponent as OBS0 } from '@/assets/images/OBS0.png';
import { ReactComponent as OBS1 } from '@/assets/images/OBS1.png';
import { ReactComponent as OBS2 } from '@/assets/images/OBS2.png';
import { ReactComponent as OBS3 } from '@/assets/images/OBS3.png';
import { ReactComponent as OBS4 } from '@/assets/images/OBS4.png';
import { ReactComponent as OBS5 } from '@/assets/images/OBS5.png';
import { ReactComponent as OBS6 } from '@/assets/images/OBS6.png';
import { ReactComponent as OBS7 } from '@/assets/images/OBS7.png';

const OBS_DESCRIPTION_LIST = [
    {
        id: 0,
        title: 'Step 1',
        content: [
            '송출 정보 확인 탭을 눌러 스트림 키랑 서버 URL을 확인하세요.',
        ],
        links: [],
        images: [OBS0],
    },
    {
        id: 1,
        title: 'Step 2',
        content: ['아래 링크에서 OBS Studio를 설치해 주세요.'],
        links: [
            { text: 'OBS 다운로드', url: 'https://obsproject.com/ko/download' },
        ],
        images: [OBS1],
    },
    {
        id: 2,
        title: 'Step 3',
        content: [
            'OBS Studio를 실행 후 방송을  설정해주세요.',
            'Step1에서 확인한 서버 URL(media-url) 스트림 키(stream-key)를 입력해주세요.',
            '영상 송출을 위해 OBS의 방송 시작 버튼을 클릭해 주세요.',
        ],
        links: [],
        images: [OBS2, OBS3, OBS4],
    },
    {
        id: 3,
        title: 'Step 4',
        content: ['방송 공개를 위해 웹페이지의 방송 시작 버튼을 눌러주세요.'],
        links: [],
        images: [OBS5],
    },
    {
        id: 4,
        title: 'Step 5',
        content: [
            '방송 종료를 원할 경우 방송 관리 페이지의 방송 종료 버튼을 클릭해주세요.',
        ],
        links: [],
        images: [OBS6],
    },
    {
        id: 5,
        title: 'Step 6',
        content: [
            '방송 종료를 원할 경우 방송 관리 페이지의 방송 종료 버튼을 클릭해주세요.',
        ],
        links: [],
        images: [OBS7],
    },
];

export { OBS_DESCRIPTION_LIST };

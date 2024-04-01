type SubMenuItem = {
  id: number;
  label: string;
  link: string;
};

type MenuItem = {
  id: number;
  label: string;
  link: string;
  subMenu?: SubMenuItem[]; // 서브 메뉴, 선택적 속성
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    label: '메인',
    link: '#',
    subMenu: [{ id: 1.1, label: '홈으로', link: '/' }],
  },
  {
    id: 2,
    label: '상품',
    link: '#',
    subMenu: [
      { id: 2.1, label: '상품 리스트', link: '/products' },
      { id: 2.2, label: '공사 중', link: '#' },
      { id: 2.3, label: '공사 중', link: '#' },
      { id: 2.4, label: '공사 중', link: '#' },
    ],
  },
  {
    id: 3,
    label: '이벤트',
    link: '#',
    subMenu: [
      { id: 3.1, label: '진행중 이벤트', link: '#' },
      { id: 3.2, label: '종료된 이벤트', link: '#' },
      { id: 3.3, label: '당첨자 발표', link: '#' },
    ],
  },
  {
    id: 4,
    label: '고객센터',
    link: '#',
    subMenu: [
      { id: 4.1, label: '공지사항', link: '#' },
      { id: 4.2, label: '자주 묻는 질문', link: '#' },
      { id: 4.3, label: '1:1 문의', link: '#' },
    ],
  },
  {
    id: 5,
    label: '마이페이지',
    link: '#',
    subMenu: [
      { id: 5.1, label: '주문/배송 조회', link: '#' },
      { id: 5.2, label: '내 정보 수정', link: '#' },
      { id: 5.3, label: '좋아요 목록', link: '#' },
      { id: 5.4, label: '리뷰 관리', link: '#' },
    ],
  },
  {
    id: 6,
    label: '상품구입',
    link: '#',
    subMenu: [{ id: 6.1, label: '장바구니', link: '/cart' }],
  },
];

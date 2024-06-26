import { MENU_TREE } from "@/types/menu";
import { FaUser } from "react-icons/fa";

export const menu: MENU_TREE = [
  {
    id: 1,
    title: "Rezervasyonu Yönet",
    url: "/iptal-guncelleme",
    submenu: [
      {
        id: 6,
        title: "Rezervasyon İptal / Güncelleme",
        url: "/iptal-guncelleme",
        submenu: [],
      },

      { id: 7, title: "İletişim", url: "/iletisim", submenu: [] },
    ],
  },
  {
    id: 2,
    title: "Araçlar",
    url: "/araclar",
    submenu: [
      {
        id: 8,
        title: "Kiralık Araçlar",
        url: "/araclar/kiralik-araclar",
        submenu: [],
      },
      {
        id: 13,
        title: "Ekonomik Kiralık Araçlar",
        url: "/araclar/ekonomik-kiralik-arac",
        submenu: [],
      },
      {
        id: 14,
        title: "Konfor Kiralık Araçlar",
        url: "/araclar/konfor-kiralik-arac",
        submenu: [],
      },
      {
        id: 15,
        title: "Prestijli Kiralık Araçlar",
        url: "/araclar/prestijli-kiralik-arac",
        submenu: [],
      },
      {
        id: 16,
        title: "Premium Kiralık Araçlar",
        url: "/araclar/premium-kiralik-arac",
        submenu: [],
      },
      {
        id: 17,
        title: "Lüks Kiralık Araçlar",
        url: "/araclar/luks-kiralik-araclar",
        submenu: [],
      },
      {
        id: 18,
        title: "Van Kiralık Araçlar",
        url: "/araclar/van-kiralik-arac",
        submenu: [],
      },
    ],
  },
  {
    id: 3,
    title: "Kampanyalar",
    url: "/kampanyalar/qualizto-kampanyalari",
    submenu: [
      {
        id: 9,
        title: "Qualizto Kampanyaları",
        url: "/kampanyalar/qualizto-kampanyalari",
        submenu: [],
      },
      {
        id: 10,
        title: "Qualizto Kurumsal Kampanyaları",
        url: "/kampanyalar/qualizto-kurumsal-kampanyalari",
        submenu: [],
      },
      {
        id: 11,
        title: "Diğer Avantajlar",
        url: "/kampanyalar/diger-avantajlar",
        submenu: [],
      },
      {
        id: 12,
        title: "Qualizto İş Birliği Anlaşmaları",
        url: "/kampanyalar/qualizto-is-birligi-anlasmalari",
        submenu: [],
      },
    ],
  },
  {
    id: 4,
    title: "Ofisler",
    url: "/ofisler",
    submenu: [],
  },
  {
    id: 5,
    title: "Hizmetler",
    url: "/hizmetler",
    submenu: [],
  },
  {
    id: 6,
    title: "Ürünler & Güvenceler",
    url: "/urunler-guvenceler",
    submenu: [],
  },

  {
    id: 7,
    title: "Üye Girişi",
    url: "/uye-girisi",
    submenu: [],
    icon: <FaUser size={20} />,
  },
];

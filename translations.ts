import { MenuItem, Testimonial } from './types';

export const TRANSLATIONS = {
  en: {
    nav: {
      home: "Home",
      cakes: "Our Cakes",
      about: "About",
      visit: "Visit Us",
      order: "Order Now",
      call: "Call"
    },
    hero: {
      est: "Est. Riad Salam",
      title: "The Sweetest Corner",
      titleHighlight: "in Agadir.",
      subtitle: "Artisanal Breads, Decadent Cakes, and the Magic of Mini Brioche. Experience the taste of tradition baked fresh daily.",
      ctaOrder: "Order Your Cake",
      ctaDirections: "Get Directions"
    },
    testimonials: {
      badge: "Rated 4.2/5 Stars by our Neighbors",
      title: "Customer Love",
      readAll: "Read all 245+ reviews on Google Maps"
    },
    menu: {
      specialties: "Our Specialties",
      title: "La Pâtisserie",
      subtitle: "Every creation is a masterpiece, made with the freshest local ingredients and artistic devotion.",
      categories: {
        all: "All Delights",
        cake: "Custom Cakes",
        moroccan: "Moroccan Sweets",
        french: "French Patisserie"
      },
      inquire: "Inquire"
    },
    about: {
      story: "Our Story",
      title: "A Staple of Riad Salam",
      p1: "For years, Mini Brioche has been the heart of the neighborhood—a place where the aroma of freshly baked bread brings families together. We believe in the power of simple ingredients transformed by time, heat, and passion.",
      p2: "Whether you need a show-stopping cake for a wedding or just a warm baguette for dinner, our doors are open until 9:30 PM every single day.",
      hoursTitle: "Opening Hours",
      days: "Monday - Sunday",
      hours: "7:00 AM - 9:30 PM",
      findTitle: "Find Us",
      address1: "8, rue Mehdi Ben Barka",
      address2: "Riad Salam, Agadir",
      openMaps: "Open in Maps"
    },
    footer: {
      subtitle: "Agadir's Favorite Boulangerie & Pâtisserie.",
      madeWith: "Made with flour, sugar & love in Agadir."
    }
  },
  fr: {
    nav: {
      home: "Accueil",
      cakes: "Nos Gâteaux",
      about: "À Propos",
      visit: "Visitez-nous",
      order: "Commander",
      call: "Appeler"
    },
    hero: {
      est: "Établi à Riad Salam",
      title: "Le Coin le Plus Doux",
      titleHighlight: "à Agadir.",
      subtitle: "Pains artisanaux, gâteaux décadents et la magie de Mini Brioche. Découvrez le goût de la tradition, cuit frais chaque jour.",
      ctaOrder: "Commander un Gâteau",
      ctaDirections: "Itinéraire"
    },
    testimonials: {
      badge: "Noté 4.2/5 étoiles par nos voisins",
      title: "L'Amour des Clients",
      readAll: "Lire plus de 245 avis sur Google Maps"
    },
    menu: {
      specialties: "Nos Spécialités",
      title: "La Pâtisserie",
      subtitle: "Chaque création est un chef-d'œuvre, réalisé avec les ingrédients locaux les plus frais et une dévotion artistique.",
      categories: {
        all: "Tous les Délices",
        cake: "Gâteaux Sur Mesure",
        moroccan: "Douceurs Marocaines",
        french: "Pâtisserie Française"
      },
      inquire: "Se Renseigner"
    },
    about: {
      story: "Notre Histoire",
      title: "Un Incontournable de Riad Salam",
      p1: "Depuis des années, Mini Brioche est le cœur du quartier—un lieu où l'odeur du pain frais rassemble les familles. Nous croyons au pouvoir des ingrédients simples transformés par le temps, la chaleur et la passion.",
      p2: "Que vous ayez besoin d'un gâteau spectaculaire pour un mariage ou simplement d'une baguette chaude pour le dîner, nos portes sont ouvertes jusqu'à 21h30 tous les jours.",
      hoursTitle: "Heures d'Ouverture",
      days: "Lundi - Dimanche",
      hours: "7h00 - 21h30",
      findTitle: "Trouvez-nous",
      address1: "8, rue Mehdi Ben Barka",
      address2: "Riad Salam, Agadir",
      openMaps: "Ouvrir dans Maps"
    },
    footer: {
      subtitle: "La Boulangerie & Pâtisserie Préférée d'Agadir.",
      madeWith: "Fait avec farine, sucre & amour à Agadir."
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      cakes: "كعكاتنا",
      about: "قصتنا",
      visit: "زورونا",
      order: "اطلب الآن",
      call: "اتصل"
    },
    hero: {
      est: "تأسست في رياض السلام",
      title: "أحلى ركن",
      titleHighlight: "في أكادير.",
      subtitle: "خبز حرفي، كعك فاخر، وسحر ميني بريوش. تذوق طعم التقاليد المخبوزة طازجة يومياً.",
      ctaOrder: "اطلب كعكتك",
      ctaDirections: "احصل على الاتجاهات"
    },
    testimonials: {
      badge: "تقييم 4.2/5 نجوم من جيراننا",
      title: "حب العملاء",
      readAll: "اقرأ أكثر من 245 مراجعة على خرائط جوجل"
    },
    menu: {
      specialties: "تخصصاتنا",
      title: "المعجنات",
      subtitle: "كل إبداع هو تحفة فنية، مصنوعة من المكونات المحلية الطازجة والتفاني الفني.",
      categories: {
        all: "كل الحلويات",
        cake: "كعك مخصص",
        moroccan: "حلويات مغربية",
        french: "معجنات فرنسية"
      },
      inquire: "استفسار"
    },
    about: {
      story: "قصتنا",
      title: "ركن أساسي في رياض السلام",
      p1: "لسنوات، كان ميني بريوش قلب الحي - مكان يجمع العائلات برائحة الخبز الطازج. نؤمن بقوة المكونات البسيطة التي تتحول بالوقت والحرارة والشغف.",
      p2: "سواء كنت بحاجة إلى كعكة مذهلة لحفل زفاف أو مجرد خبز باغيت دافئ للعشاء، أبوابنا مفتوحة حتى الساعة 9:30 مساءً كل يوم.",
      hoursTitle: "ساعات العمل",
      days: "الاثنين - الأحد",
      hours: "7:00 ص - 9:30 م",
      findTitle: "موقعنا",
      address1: "8، شارع مهدي بن بركة",
      address2: "رياض السلام، أكادير",
      openMaps: "فتح في الخرائط"
    },
    footer: {
      subtitle: "المخبز والحلويات المفضل في أكادير.",
      madeWith: "صنع بالدقيق والسكر والحب في أكادير."
    }
  }
};

// Data getters based on language to keep constants.ts clean or replace it
export const getTestimonials = (lang: 'en' | 'fr' | 'ar'): Testimonial[] => {
  // Simplified for demo: In a real app, these would be fully translated.
  // Using English structure but potentially could map text if strictly needed.
  // For now we keep the reviews in English/Mixed as they are authentic User Generated Content usually.
  // But purely for the demo interface, I will assume we might want to translate them or leave them.
  // I will leave them as is for authenticity but headers change.
  return [
      {
        id: '1',
        name: "Fatima Z.",
        rating: 5,
        text: lang === 'ar' ? "أفضل كعكة عيد ميلاد طلبتها على الإطلاق! لم تكن جميلة فحسب، بل كانت الكريمة خفيفة وطازجة." : "The best birthday cake I've ever ordered! Not only was it beautiful, but the cream was light and fresh. A true gem in Riad Salam.",
        date: "2 weeks ago"
      },
      {
        id: '2',
        name: "Karim M.",
        rating: 5,
        text: lang === 'ar' ? "طقوسي الصباحية تشمل الكرواسون والميني بريوش. دائماً دافئة ودائماً خدمة ودودة." : "My morning ritual involves their croissants and mini brioches. Always warm, always friendly service. Highly recommended.",
        date: "1 month ago"
      },
      {
        id: '3',
        name: "Sarah L.",
        rating: 4,
        text: lang === 'ar' ? "طلبت كعكة مخصصة لذكرى زواجي. اهتموا بكل التفاصيل. لذيذة وأنيقة." : "Ordered a custom cake for my wedding anniversary. They paid attention to every detail. Delicious and elegant.",
        date: "3 months ago"
      }
  ];
};

export const getMenuItems = (lang: 'en' | 'fr' | 'ar'): MenuItem[] => {
  const isAr = lang === 'ar';
  const isFr = lang === 'fr';
  
  return [
    {
      id: 'c1',
      title: isAr ? "كعكة رويال" : (isFr ? "Gâteau Royal" : "Royal Cake"),
      description: isAr ? "طبقات من الفانيليا. مثالية للاحتفالات." : (isFr ? "Couches de vanille. Parfait pour les célébrations." : "Layers of vanilla. Perfect for celebrations."),
      category: 'cake',
      image: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSz3LnfRkszmNQUqo2WPdCqO-kUvomCoW12AsmtHVfNmsiVsclPfyNM0ZtvguHANmw83U04P4tDLKutsKNNsGmeGQ1qxf7Fom6S-nobKJQd_IVB2pN4i-G4lr_P7xc-yw2dLTW6Bxg=w172-h224-p-k-no",
      tags: isAr ? ["الأكثر مبيعاً"] : (isFr ? ["Meilleure Vente"] : ["Best Seller"])
    },
    {
      id: 'c2',
      title: isAr ? "كعكة الزفاف" : (isFr ? "Gâteau de Mariage" : "Wedding Cake"),
      description: isAr ? "كعكة أنيقة متعددة الطبقات بكريمة الفانيليا ولمسات ذهبية." : (isFr ? "Gâteau élégant à plusieurs étages avec crème à la vanille." : "Elegant multi-tier cake with vanilla bean cream and edible gold leaf accents."),
      category: 'cake',
      image: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxATF0vsV6PvFsnsIsmFCYmHtL-Pn-_hYYVP5zJTqSUEUwn17LoIgDtUVaKc7VtetNKieuNWOAd8uMaM1BAIlU5M8Iyjdhd7pLBX2-fzXtqByrXnf_L6abWI2XMSzXL-TiYzUQB=w172-h224-p-k-no",
      tags: isAr ? ["حفلات زفاف"] : (isFr ? ["Mariage"] : ["Wedding"])
    },
    {
      id: 'm1',
      title: isAr ? "شباكية كلاسيكية" : "Classic Chebakia",
      description: isAr ? "حلوى مغربية تقليدية بالسمسم والعسل." : (isFr ? "Biscuits marocains traditionnels au sésame, miel et eau de rose." : "Traditional Moroccan sesame cookies coated in honey and rose water."),
      category: 'moroccan',
      image: "https://picsum.photos/id/835/600/400",
      tags: isAr ? ["رمضان"] : (isFr ? ["Spécial Ramadan"] : ["Ramadan Special"])
    },
    {
      id: 'm2',
      title: isAr ? "بريوات اللوز" : (isFr ? "Briouat aux Amandes" : "Almond Briouat"),
      description: isAr ? "معجنات مقرمشة محشوة بمعجون اللوز ومغموسة في العسل." : (isFr ? "Pâtisseries croustillantes farcies à la pâte d'amande et trempées dans le miel." : "Crispy triangular pastries filled with almond paste and dipped in honey."),
      category: 'moroccan',
      image: "https://picsum.photos/id/431/600/400"
    },
    {
      id: 'f1',
      title: isAr ? "كرواسون بالزبدة" : (isFr ? "Croissant au Beurre" : "Butter Croissant"),
      description: isAr ? "هش، بالزبدة، وذهبي. يخبز طازجاً كل صباح." : (isFr ? "Feuilleté, au beurre et doré. Cuit frais tous les matins." : "Flaky, buttery, and golden. Baked fresh every morning at 6 AM."),
      category: 'french',
      image: "https://picsum.photos/id/488/600/400"
    },
    {
      id: 'f2',
      title: isAr ? "إكلير بالشوكولاتة" : (isFr ? "Éclair au Chocolat" : "Éclair au Chocolat"),
      description: isAr ? "عجينة الشو محشوة بكريمة الشوكولاتة الغنية." : (isFr ? "Pâte à choux fourrée à la crème au chocolat riche." : "Choux pastry filled with rich chocolate cream and topped with fondant icing."),
      category: 'french',
      image: "https://picsum.photos/id/1062/600/400"
    }
  ];
};
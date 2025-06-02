
const generateTitles = (product: string, price: string, country: string, languageCode: string, funnel: string): string[] => {
  let titleBank = [];

  if (languageCode === 'pt') {
    if (funnel === 'top') {
      // Topo de Funil - títulos curiosos, chamativos
      titleBank = [
        `Você sabia que ${product} pode mudar sua vida?`,
        `Descubra o segredo por trás de ${product}`,
        `O que ninguém te conta sobre ${product}`,
        `Por que ${product} está fazendo tanto sucesso?`,
        `A verdade sobre ${product} que você precisa saber`,
        `${product}: O produto que está revolucionando tudo`,
        `Finalmente chegou: ${product} no ${country}`,
        `Atenção: ${product} pode ser exatamente o que você procura`,
        `Curiosidade: Como ${product} funciona na prática?`,
        `Surpreenda-se com os resultados de ${product}`,
        `${product}: A novidade que todos estão falando`,
        `Será que ${product} realmente funciona?`,
        `Conheça ${product} antes que seja tarde demais`,
        `${product} chegou ao ${country} e está causando`,
        `O fenômeno ${product} finalmente explicado`,
        `Descubra por que ${product} virou febre`,
        `${product}: O que os especialistas não querem que você saiba`,
        `A história por trás do sucesso de ${product}`,
        `${product}: Mito ou realidade? Descubra agora`,
        `Por que ${product} está mudando vidas no ${country}?`,
        `O segredo de ${product} revelado pela primeira vez`,
        `${product}: A descoberta que está impressionando`,
        `Atenção ${country}: ${product} pode ser a solução`,
        `${product} - O produto que todos querem entender`,
        `Finalmente: a verdade sobre ${product}`,
        `${product} no ${country}: O que você precisa saber`,
        `Descubra como ${product} pode te ajudar`,
        `${product}: A revolução que chegou ao ${country}`,
        `O mistério de ${product} finalmente revelado`,
        `Por que ${product} está conquistando o ${country}?`,
        `${product}: A novidade que pode mudar tudo`,
        `Conheça o poder transformador de ${product}`,
        `${product} - A descoberta que todos esperavam`
      ];
    } else if (funnel === 'mid') {
      // Meio de Funil - títulos explicativos, benefícios
      titleBank = [
        `${product} - Benefícios comprovados cientificamente`,
        `Como ${product} pode melhorar sua qualidade de vida`,
        `${product}: Resultados reais em ${country}`,
        `Os principais benefícios de ${product} explicados`,
        `Por que escolher ${product}? Veja as vantagens`,
        `${product} vs concorrentes: Compare e decida`,
        `${product}: Solução completa para suas necessidades`,
        `Entenda como ${product} funciona passo a passo`,
        `${product} - Tecnologia avançada ao seu alcance`,
        `Os resultados de ${product} que você pode esperar`,
        `${product}: Eficácia comprovada em estudos`,
        `Como ${product} se destaca no mercado`,
        `${product} - A ciência por trás dos resultados`,
        `Benefícios exclusivos de ${product} no ${country}`,
        `${product}: Qualidade e eficiência garantidas`,
        `Por que ${product} é a escolha inteligente`,
        `${product} - Inovação que faz a diferença`,
        `Como ${product} pode resolver seu problema`,
        `${product}: Resultados superiores comprovados`,
        `A tecnologia de ${product} explicada`,
        `${product} - Benefícios que você vai notar`,
        `Por que ${product} supera as expectativas`,
        `${product}: A solução que você estava procurando`,
        `Como ${product} pode transformar sua rotina`,
        `${product} - Eficácia testada e aprovada`,
        `Os diferenciais únicos de ${product}`,
        `${product}: Qualidade premium no ${country}`,
        `Como ${product} entrega resultados reais`,
        `${product} - A escolha dos especialistas`,
        `Por que ${product} é considerado o melhor`,
        `${product}: Inovação e resultados em um só produto`,
        `Como ${product} pode ser sua solução ideal`,
        `${product} - Benefícios que valem a pena`
      ];
    } else {
      // Fundo de Funil e COD - títulos diretos, urgentes, com CTA
      titleBank = [
        `Compre ${product} agora e pague apenas ${price}!`,
        `${product} - Últimas unidades por ${price}`,
        `Aproveite! ${product} com 50% de desconto`,
        `${product} - Oferta imperdível por ${price}`,
        `Garante já seu ${product} por apenas ${price}`,
        `${product} - Promoção relâmpago por ${price}`,
        `Últimas horas: ${product} por ${price}`,
        `${product} - Compre hoje e economize!`,
        `Oferta especial: ${product} por ${price}`,
        `${product} - Não perca esta oportunidade!`,
        `Adquira ${product} agora por ${price}`,
        `${product} - Desconto exclusivo por tempo limitado`,
        `Peça já seu ${product} por apenas ${price}`,
        `${product} - Oferta válida apenas hoje!`,
        `Compre ${product} e receba em casa por ${price}`,
        `${product} - Liquidação por ${price}`,
        `Últimas peças: ${product} por ${price}`,
        `${product} - Aproveite o preço promocional`,
        `Garanta ${product} com desconto especial`,
        `${product} - Oferta por tempo limitado!`,
        `Compre agora: ${product} por ${price}`,
        `${product} - Promoção exclusiva no ${country}`,
        `Peça hoje ${product} e pague só ${price}`,
        `${product} - Desconto imperdível!`,
        `Aproveite: ${product} em oferta por ${price}`,
        `${product} - Compre já e não se arrependa`,
        `Oferta final: ${product} por ${price}`,
        `${product} - Últimas unidades disponíveis`,
        `Garante o seu: ${product} por ${price}`,
        `${product} - Promoção de lançamento!`,
        `Compre ${product} hoje e economize muito`,
        `${product} - Oferta exclusiva para o ${country}`,
        `Peça agora ${product} por apenas ${price}!`
      ];
    }
  } else if (languageCode === 'es') {
    if (funnel === 'top') {
      titleBank = [
        `¿Sabías que ${product} puede cambiar tu vida?`,
        `Descubre el secreto detrás de ${product}`,
        `Lo que nadie te cuenta sobre ${product}`,
        `¿Por qué ${product} está teniendo tanto éxito?`,
        `La verdad sobre ${product} que necesitas saber`,
        `${product}: El producto que está revolucionando todo`,
        `Finalmente llegó: ${product} en ${country}`,
        `Atención: ${product} puede ser exactamente lo que buscas`,
        `Curiosidad: ¿Cómo funciona ${product} en la práctica?`,
        `Sorpréndete con los resultados de ${product}`,
        `${product}: La novedad de la que todos hablan`,
        `¿Realmente funciona ${product}?`,
        `Conoce ${product} antes de que sea demasiado tarde`,
        `${product} llegó a ${country} y está causando sensación`,
        `El fenómeno ${product} finalmente explicado`
      ];
    } else if (funnel === 'mid') {
      titleBank = [
        `${product} - Benefícios comprobados científicamente`,
        `Cómo ${product} puede mejorar tu calidad de vida`,
        `${product}: Resultados reales en ${country}`,
        `Los principales beneficios de ${product} explicados`,
        `¿Por qué elegir ${product}? Ve las ventajas`,
        `${product} vs competidores: Compara y decide`,
        `${product}: Solución completa para tus necesidades`,
        `Entiende cómo funciona ${product} paso a paso`,
        `${product} - Tecnología avanzada a tu alcance`,
        `Los resultados de ${product} que puedes esperar`,
        `${product}: Eficacia comprobada en estudios`,
        `Cómo ${product} se destaca en el mercado`,
        `${product} - La ciencia detrás de los resultados`,
        `Beneficios exclusivos de ${product} en ${country}`,
        `${product}: Calidad y eficiencia garantizadas`
      ];
    } else {
      titleBank = [
        `¡Compra ${product} ahora y paga solo ${price}!`,
        `${product} - Últimas unidades por ${price}`,
        `¡Aprovecha! ${product} con 50% de descuento`,
        `${product} - Oferta imperdible por ${price}`,
        `Asegura ya tu ${product} por solo ${price}`,
        `${product} - Promoción relámpago por ${price}`,
        `Últimas horas: ${product} por ${price}`,
        `${product} - ¡Compra hoy y ahorra!`,
        `Oferta especial: ${product} por ${price}`,
        `${product} - ¡No pierdas esta oportunidad!`,
        `Adquiere ${product} ahora por ${price}`,
        `${product} - Descuento exclusivo por tiempo limitado`,
        `Pide ya tu ${product} por solo ${price}`,
        `${product} - ¡Oferta válida solo hoy!`,
        `Compra ${product} y recíbelo en casa por ${price}`
      ];
    }
  } else if (languageCode === 'ru') {
    // Russo
    if (funnel === 'top') {
      titleBank = [
        `Знали ли вы, что ${product} может изменить вашу жизнь?`,
        `Откройте секрет ${product}`,
        `То, что никто не говорит вам о ${product}`,
        `Почему ${product} так популярен?`,
        `Правда о ${product}, которую вам нужно знать`,
        `${product}: Продукт, который революционизирует всё`,
        `Наконец-то в ${country}: ${product}`,
        `Внимание: ${product} может быть именно тем, что вы ищете`,
        `Любопытно: как работает ${product} на практике?`,
        `Удивитесь результатам ${product}`,
        `${product}: Новинка, о которой все говорят`,
        `Действительно ли работает ${product}?`,
        `Узнайте о ${product} до того, как будет поздно`,
        `${product} прибыл в ${country} и произвёл сенсацию`,
        `Феномен ${product} наконец объяснён`
      ];
    } else if (funnel === 'mid') {
      titleBank = [
        `${product} - Научно доказанные преимущества`,
        `Как ${product} может улучшить качество вашей жизни`,
        `${product}: Реальные результаты в ${country}`,
        `Основные преимущества ${product} объяснены`,
        `Почему выбрать ${product}? Посмотрите преимущества`,
        `${product} против конкурентов: Сравните и решите`,
        `${product}: Полное решение для ваших потребностей`,
        `Поймите, как работает ${product} пошагово`,
        `${product} - Передовые технологии в ваших руках`,
        `Результаты ${product}, которых вы можете ожидать`,
        `${product}: Эффективность, доказанная в исследованиях`,
        `Как ${product} выделяется на рынке`,
        `${product} - Наука за результатами`,
        `Эксклюзивные преимущества ${product} в ${country}`,
        `${product}: Гарантированное качество и эффективность`
      ];
    } else {
      titleBank = [
        `Купите ${product} сейчас и платите только ${price}!`,
        `${product} - Последние единицы за ${price}`,
        `Воспользуйтесь! ${product} со скидкой 50%`,
        `${product} - Незабываемое предложение за ${price}`,
        `Обеспечьте свой ${product} всего за ${price}`,
        `${product} - Молниеносная акция за ${price}`,
        `Последние часы: ${product} за ${price}`,
        `${product} - Покупайте сегодня и экономьте!`,
        `Специальное предложение: ${product} за ${price}`,
        `${product} - Не упустите эту возможность!`,
        `Приобретите ${product} сейчас за ${price}`,
        `${product} - Эксклюзивная скидка на ограниченное время`,
        `Закажите ваш ${product} всего за ${price}`,
        `${product} - Предложение действительно только сегодня!`,
        `Покупайте ${product} и получайте дома за ${price}`
      ];
    }
  } else if (languageCode === 'zh') {
    // Chinês
    if (funnel === 'top') {
      titleBank = [
        `您知道${product}能改變您的生活嗎？`,
        `發現${product}背後的秘密`,
        `沒人告訴您關於${product}的事`,
        `為什麼${product}如此成功？`,
        `您需要知道的${product}真相`,
        `${product}：正在革命一切的產品`,
        `終於來了：${product}在${country}`,
        `注意：${product}可能正是您在尋找的`,
        `好奇：${product}在實踐中如何工作？`,
        `驚訝於${product}的結果`,
        `${product}：每個人都在談論的新奇事物`,
        `${product}真的有效嗎？`,
        `在為時已晚之前了解${product}`,
        `${product}來到${country}並引起轟動`,
        `${product}現象終於得到解釋`
      ];
    } else if (funnel === 'mid') {
      titleBank = [
        `${product} - 科學證明的好處`,
        `${product}如何改善您的生活質量`,
        `${product}：在${country}的真實結果`,
        `${product}的主要好處解釋`,
        `為什麼選擇${product}？看看優勢`,
        `${product}與競爭對手：比較並決定`,
        `${product}：滿足您需求的完整解決方案`,
        `逐步了解${product}的工作原理`,
        `${product} - 觸手可及的先進技術`,
        `您可以期待的${product}結果`,
        `${product}：研究證明的功效`,
        `${product}如何在市場中脫穎而出`,
        `${product} - 結果背後的科學`,
        `${product}在${country}的獨家好處`,
        `${product}：保證的質量和效率`
      ];
    } else {
      titleBank = [
        `立即購買${product}，只需支付${price}！`,
        `${product} - 最後幾件${price}`,
        `利用！${product}50%折扣`,
        `${product} - ${price}不容錯過的優惠`,
        `現在就以${price}確保您的${product}`,
        `${product} - ${price}閃電促銷`,
        `最後幾小時：${product}${price}`,
        `${product} - 今天購買並節省！`,
        `特別優惠：${product}${price}`,
        `${product} - 不要錯過這個機會！`,
        `現在以${price}獲得${product}`,
        `${product} - 限時獨家折扣`,
        `立即訂購您的${product}，僅需${price}`,
        `${product} - 優惠僅限今日！`,
        `購買${product}並以${price}送貨到家`
      ];
    }
  } else if (languageCode === 'hi') {
    // Hindi
    if (funnel === 'top') {
      titleBank = [
        `क्या आप जानते हैं कि ${product} आपका जीवन बदल सकता है?`,
        `${product} के पीछे का रहस्य खोजें`,
        `${product} के बारे में जो कोई आपको नहीं बताता`,
        `${product} इतना सफल क्यों है?`,
        `${product} के बारे में सच्चाई जो आपको जानना चाहिए`,
        `${product}: वह उत्पाद जो सब कुछ क्रांतिकारी बना रहा है`,
        `आखिरकार आया: ${country} में ${product}`,
        `ध्यान दें: ${product} वही हो सकता है जिसकी आप तलाश कर रहे हैं`,
        `जिज्ञासा: ${product} व्यावहारिक रूप से कैसे काम करता है?`,
        `${product} के परिणामों से आश्चर्यचकित हों`,
        `${product}: वह नवीनता जिसके बारे में सभी बात कर रहे हैं`,
        `क्या ${product} वास्तव में काम करता है?`,
        `बहुत देर होने से पहले ${product} को जानें`,
        `${product} ${country} आया और सनसनी मचा दी`,
        `${product} की घटना आखिरकार समझाई गई`
      ];
    } else if (funnel === 'mid') {
      titleBank = [
        `${product} - वैज्ञानिक रूप से सिद्ध लाभ`,
        `${product} आपके जीवन की गुणवत्ता कैसे सुधार सकता है`,
        `${product}: ${country} में वास्तविक परिणाम`,
        `${product} के मुख्य लाभ समझाए गए`,
        `${product} क्यों चुनें? फायदे देखें`,
        `${product} बनाम प्रतियोगी: तुलना करें और निर्णय लें`,
        `${product}: आपकी आवश्यकताओं के लिए पूर्ण समाधान`,
        `समझें कि ${product} कदम दर कदम कैसे काम करता है`,
        `${product} - आपकी पहुंच में उन्नत तकनीक`,
        `${product} के परिणाम जिनकी आप अपेक्षा कर सकते हैं`,
        `${product}: अध्ययनों में सिद्ध प्रभावकारिता`,
        `${product} बाजार में कैसे अलग है`,
        `${product} - परिणामों के पीछे का विज्ञान`,
        `${country} में ${product} के विशेष लाभ`,
        `${product}: गारंटीशुदा गुणवत्ता और दक्षता`
      ];
    } else {
      titleBank = [
        `अभी ${product} खरीदें और केवल ${price} का भुगतान करें!`,
        `${product} - ${price} में अंतिम इकाइयां`,
        `फायदा उठाएं! ${product} 50% छूट के साथ`,
        `${product} - ${price} में अविस्मरणीय प्रस्ताव`,
        `अभी ${price} में अपना ${product} सुरक्षित करें`,
        `${product} - ${price} में बिजली की तरह प्रमोशन`,
        `अंतिम घंटे: ${product} ${price} में`,
        `${product} - आज खरीदें और बचाएं!`,
        `विशेष प्रस्ताव: ${product} ${price} में`,
        `${product} - इस अवसर को न चूकें!`,
        `अभी ${price} में ${product} प्राप्त करें`,
        `${product} - सीमित समय के लिए विशेष छूट`,
        `अभी ${price} में अपना ${product} ऑर्डर करें`,
        `${product} - प्रस्ताव केवल आज के लिए वैध!`,
        `${product} खरीदें और ${price} में घर पर प्राप्त करें`
      ];
    }
  } else if (languageCode === 'pl') {
    // Polonês
    if (funnel === 'top') {
      titleBank = [
        `Czy wiedziałeś, że ${product} może zmienić twoje życie?`,
        `Odkryj sekret ${product}`,
        `To, czego nikt ci nie mówi o ${product}`,
        `Dlaczego ${product} jest tak popularny?`,
        `Prawda o ${product}, którą musisz znać`,
        `${product}: Produkt, który rewolucjonizuje wszystko`,
        `Wreszcie tutaj: ${product} w ${country}`,
        `Uwaga: ${product} może być dokładnie tym, czego szukasz`,
        `Ciekawostka: jak ${product} działa w praktyce?`,
        `Zdziw się wynikami ${product}`,
        `${product}: Nowość, o której wszyscy mówią`,
        `Czy ${product} naprawdę działa?`,
        `Poznaj ${product} zanim będzie za późno`,
        `${product} przybył do ${country} i wywołał sensację`,
        `Fenomen ${product} w końcu wyjaśniony`
      ];
    } else if (funnel === 'mid') {
      titleBank = [
        `${product} - Naukowo udowodnione korzyści`,
        `Jak ${product} może poprawić jakość twojego życia`,
        `${product}: Prawdziwe wyniki w ${country}`,
        `Główne korzyści ${product} wyjaśnione`,
        `Dlaczego wybrać ${product}? Zobacz zalety`,
        `${product} kontra konkurencja: Porównaj i zdecyduj`,
        `${product}: Kompletne rozwiązanie dla twoich potrzeb`,
        `Zrozum jak ${product} działa krok po kroku`,
        `${product} - Zaawansowana technologia w twoim zasięgu`,
        `Wyniki ${product}, których możesz oczekiwać`,
        `${product}: Skuteczność udowodniona w badaniach`,
        `Jak ${product} wyróżnia się na rynku`,
        `${product} - Nauka stojąca za wynikami`,
        `Ekskluzywne korzyści ${product} w ${country}`,
        `${product}: Gwarantowana jakość i skuteczność`
      ];
    } else {
      titleBank = [
        `Kup ${product} teraz i zapłać tylko ${price}!`,
        `${product} - Ostatnie sztuki za ${price}`,
        `Skorzystaj! ${product} z 50% zniżką`,
        `${product} - Niezapomniana oferta za ${price}`,
        `Zabezpiecz swój ${product} już za ${price}`,
        `${product} - Błyskawiczna promocja za ${price}`,
        `Ostatnie godziny: ${product} za ${price}`,
        `${product} - Kup dziś i oszczędzaj!`,
        `Specjalna oferta: ${product} za ${price}`,
        `${product} - Nie przegap tej okazji!`,
        `Zdobądź ${product} teraz za ${price}`,
        `${product} - Ekskluzywna zniżka na ograniczony czas`,
        `Zamów swój ${product} już za ${price}`,
        `${product} - Oferta ważna tylko dziś!`,
        `Kup ${product} i otrzymaj w domu za ${price}`
      ];
    }
  } else if (languageCode === 'fi') {
    // Finlandês
    if (funnel === 'top') {
      titleBank = [
        `Tiesitkö, että ${product} voi muuttaa elämäsi?`,
        `Löydä ${product}:n salaisuus`,
        `Se, mitä kukaan ei kerro sinulle ${product}:sta`,
        `Miksi ${product} on niin menestynyt?`,
        `Totuus ${product}:sta, joka sinun täytyy tietää`,
        `${product}: Tuote, joka mullistaa kaiken`,
        `Vihdoin täällä: ${product} ${country}:ssa`,
        `Huomio: ${product} saattaa olla juuri sitä, mitä etsit`,
        `Mielenkiintoista: miten ${product} toimii käytännössä?`,
        `Hämmästy ${product}:n tuloksista`,
        `${product}: Uutuus, josta kaikki puhuvat`,
        `Toimiiko ${product} todella?`,
        `Tutustu ${product}:iin ennen kuin on liian myöhäistä`,
        `${product} saapui ${country}:aan ja aiheutti sensaation`,
        `${product}-ilmiö vihdoin selitetty`
      ];
    } else if (funnel === 'mid') {
      titleBank = [
        `${product} - Tieteellisesti todistetut hyödyt`,
        `Miten ${product} voi parantaa elämänlaatuasi`,
        `${product}: Todelliset tulokset ${country}:ssa`,
        `${product}:n tärkeimmät hyödyt selitettynä`,
        `Miksi valita ${product}? Katso edut`,
        `${product} vs kilpailijat: Vertaile ja päätä`,
        `${product}: Täydellinen ratkaisu tarpeisiisi`,
        `Ymmärrä miten ${product} toimii askel askeleelta`,
        `${product} - Kehittynyt teknologia ulottuvillasi`,
        `${product}:n tulokset, joita voit odottaa`,
        `${product}: Tutkimuksissa todistettu tehokkuus`,
        `Miten ${product} erottuu markkinoilla`,
        `${product} - Tiede tulosten takana`,
        `${product}:n eksklusiiviset hyödyt ${country}:ssa`,
        `${product}: Taattu laatu ja tehokkuus`
      ];
    } else {
      titleBank = [
        `Osta ${product} nyt ja maksa vain ${price}!`,
        `${product} - Viimeiset kappaleet ${price}`,
        `Hyödynnä! ${product} 50% alennuksella`,
        `${product} - Unohtumaton tarjous ${price}`,
        `Varmista ${product} vain ${price}`,
        `${product} - Salamanopea kampanja ${price}`,
        `Viimeiset tunnit: ${product} ${price}`,
        `${product} - Osta tänään ja säästä!`,
        `Erikoistarjous: ${product} ${price}`,
        `${product} - Älä missaa tätä tilaisuutta!`,
        `Hanki ${product} nyt ${price}`,
        `${product} - Eksklusiivinen alennus rajoitetuksi ajaksi`,
        `Tilaa ${product} vain ${price}`,
        `${product} - Tarjous voimassa vain tänään!`,
        `Osta ${product} ja saa kotiin ${price}`
      ];
    }
  } else if (languageCode === 'sv') {
    // Sueco
    if (funnel === 'top') {
      titleBank = [
        `Visste du att ${product} kan förändra ditt liv?`,
        `Upptäck hemligheten bakom ${product}`,
        `Det som ingen berättar för dig om ${product}`,
        `Varför är ${product} så framgångsrik?`,
        `Sanningen om ${product} som du behöver veta`,
        `${product}: Produkten som revolutionerar allt`,
        `Äntligen här: ${product} i ${country}`,
        `Observera: ${product} kan vara precis vad du letar efter`,
        `Nyfikenhet: hur fungerar ${product} i praktiken?`,
        `Bli förvånad över resultaten av ${product}`,
        `${product}: Nyheten som alla pratar om`,
        `Fungerar ${product} verkligen?`,
        `Lär känna ${product} innan det är för sent`,
        `${product} kom till ${country} och orsakade sensation`,
        `${product}-fenomenet äntligen förklarat`
      ];
    } else if (funnel === 'mid') {
      titleBank = [
        `${product} - Vetenskapligt bevisade fördelar`,
        `Hur ${product} kan förbättra din livskvalitet`,
        `${product}: Verkliga resultat i ${country}`,
        `De huvudsakliga fördelarna med ${product} förklarade`,
        `Varför välja ${product}? Se fördelarna`,
        `${product} vs konkurrenter: Jämför och bestäm`,
        `${product}: Komplett lösning för dina behov`,
        `Förstå hur ${product} fungerar steg för steg`,
        `${product} - Avancerad teknik inom räckhåll`,
        `Resultaten av ${product} som du kan förvänta dig`,
        `${product}: Effektivitet bevisad i studier`,
        `Hur ${product} sticker ut på marknaden`,
        `${product} - Vetenskapen bakom resultaten`,
        `Exklusiva fördelar med ${product} i ${country}`,
        `${product}: Garanterad kvalitet och effektivitet`
      ];
    } else {
      titleBank = [
        `Köp ${product} nu och betala bara ${price}!`,
        `${product} - Sista enheterna för ${price}`,
        `Utnyttja! ${product} med 50% rabatt`,
        `${product} - Omöjligt erbjudande för ${price}`,
        `Säkra din ${product} för bara ${price}`,
        `${product} - Blixtsnabb kampanj för ${price}`,
        `Sista timmarna: ${product} för ${price}`,
        `${product} - Köp idag och spara!`,
        `Specialerbjudande: ${product} för ${price}`,
        `${product} - Missa inte denna möjlighet!`,
        `Skaffa ${product} nu för ${price}`,
        `${product} - Exklusiv rabatt för begränsad tid`,
        `Beställ din ${product} för bara ${price}`,
        `${product} - Erbjudandet gäller endast idag!`,
        `Köp ${product} och få hem för ${price}`
      ];
    }
  } else if (languageCode === 'nl') {
    // Holandês
    if (funnel === 'top') {
      titleBank = [
        `Wist je dat ${product} je leven kan veranderen?`,
        `Ontdek het geheim achter ${product}`,
        `Wat niemand je vertelt over ${product}`,
        `Waarom is ${product} zo succesvol?`,
        `De waarheid over ${product} die je moet weten`,
        `${product}: Het product dat alles revolutioneert`,
        `Eindelijk hier: ${product} in ${country}`,
        `Let op: ${product} kan precies zijn wat je zoekt`,
        `Nieuwsgierigheid: hoe werkt ${product} in de praktijk?`,
        `Verbaas je over de resultaten van ${product}`,
        `${product}: De nieuwigheid waar iedereen over praat`,
        `Werkt ${product} echt?`,
        `Leer ${product} kennen voordat het te laat is`,
        `${product} kwam naar ${country} en veroorzaakte een sensatie`,
        `Het ${product} fenomeen eindelijk uitgelegd`
      ];
    } else if (funnel === 'mid') {
      titleBank = [
        `${product} - Wetenschappelijk bewezen voordelen`,
        `Hoe ${product} je levenskwaliteit kan verbeteren`,
        `${product}: Echte resultaten in ${country}`,
        `De belangrijkste voordelen van ${product} uitgelegd`,
        `Waarom kiezen voor ${product}? Zie de voordelen`,
        `${product} vs concurrenten: Vergelijk en beslis`,
        `${product}: Volledige oplossing voor je behoeften`,
        `Begrijp hoe ${product} stap voor stap werkt`,
        `${product} - Geavanceerde technologie binnen handbereik`,
        `De resultaten van ${product} die je kunt verwachten`,
        `${product}: Effectiviteit bewezen in studies`,
        `Hoe ${product} opvalt in de markt`,
        `${product} - De wetenschap achter de resultaten`,
        `Exclusieve voordelen van ${product} in ${country}`,
        `${product}: Gegarandeerde kwaliteit en efficiëntie`
      ];
    } else {
      titleBank = [
        `Koop ${product} nu en betaal slechts ${price}!`,
        `${product} - Laatste eenheden voor ${price}`,
        `Profiteer! ${product} met 50% korting`,
        `${product} - Onvergetelijke aanbieding voor ${price}`,
        `Beveilig je ${product} voor slechts ${price}`,
        `${product} - Bliksemsnelle actie voor ${price}`,
        `Laatste uren: ${product} voor ${price}`,
        `${product} - Koop vandaag en bespaar!`,
        `Speciale aanbieding: ${product} voor ${price}`,
        `${product} - Mis deze kans niet!`,
        `Krijg ${product} nu voor ${price}`,
        `${product} - Exclusieve korting voor beperkte tijd`,
        `Bestel je ${product} voor slechts ${price}`,
        `${product} - Aanbieding geldig alleen vandaag!`,
        `Koop ${product} en ontvang thuis voor ${price}`
      ];
    }
  } else if (languageCode === 'da') {
    // Dinamarquês
    if (funnel === 'top') {
      titleBank = [
        `Vidste du, at ${product} kan ændre dit liv?`,
        `Opdag hemmeligheden bag ${product}`,
        `Det, som ingen fortæller dig om ${product}`,
        `Hvorfor er ${product} så succesfuld?`,
        `Sandheden om ${product}, som du skal vide`,
        `${product}: Produktet, der revolutionerer alt`,
        `Endelig her: ${product} i ${country}`,
        `Bemærk: ${product} kan være præcis, hvad du leder efter`,
        `Nysgerrighed: hvordan virker ${product} i praksis?`,
        `Bliv overrasket over resultaterne af ${product}`,
        `${product}: Nyheden, som alle taler om`,
        `Virker ${product} virkelig?`,
        `Lær ${product} at kende, før det er for sent`,
        `${product} kom til ${country} og forårsagede sensation`,
        `${product}-fænomenet endelig forklaret`
      ];
    } else if (funnel === 'mid') {
      titleBank = [
        `${product} - Videnskabeligt beviste fordele`,
        `Hvordan ${product} kan forbedre din livskvalitet`,
        `${product}: Virkelige resultater i ${country}`,
        `De vigtigste fordele ved ${product} forklaret`,
        `Hvorfor vælge ${product}? Se fordelene`,
        `${product} vs konkurrenter: Sammenlign og beslut`,
        `${product}: Komplet løsning til dine behov`,
        `Forstå, hvordan ${product} virker trin for trin`,
        `${product} - Avanceret teknologi inden for rækkevidde`,
        `Resultaterne af ${product}, som du kan forvente`,
        `${product}: Effektivitet bevist i studier`,
        `Hvordan ${product} skiller sig ud på markedet`,
        `${product} - Videnskaben bag resultaterne`,
        `Eksklusive fordele ved ${product} i ${country}`,
        `${product}: Garanteret kvalitet og effektivitet`
      ];
    } else {
      titleBank = [
        `Køb ${product} nu og betal kun ${price}!`,
        `${product} - Sidste enheder for ${price}`,
        `Udnyt! ${product} med 50% rabat`,
        `${product} - Uforglemmelig tilbud for ${price}`,
        `Sikr din ${product} for kun ${price}`,
        `${product} - Lynhurtig kampagne for ${price}`,
        `Sidste timer: ${product} for ${price}`,
        `${product} - Køb i dag og spar!`,
        `Specialtilbud: ${product} for ${price}`,
        `${product} - Gå ikke glip af denne mulighed!`,
        `Få ${product} nu for ${price}`,
        `${product} - Eksklusiv rabat i begrænset tid`,
        `Bestil din ${product} for kun ${price}`,
        `${product} - Tilbud gælder kun i dag!`,
        `Køb ${product} og modtag hjemme for ${price}`
      ];
    }
  } else if (languageCode === 'no') {
    // Norueguês
    if (funnel === 'top') {
      titleBank = [
        `Visste du at ${product} kan forandre livet ditt?`,
        `Oppdag hemmeligheten bak ${product}`,
        `Det som ingen forteller deg om ${product}`,
        `Hvorfor er ${product} så vellykket?`,
        `Sannheten om ${product} som du må vite`,
        `${product}: Produktet som revolusjonerer alt`,
        `Endelig her: ${product} i ${country}`,
        `Merk: ${product} kan være akkurat det du leter etter`,
        `Nysgjerrighet: hvordan fungerer ${product} i praksis?`,
        `Bli overrasket over resultatene av ${product}`,
        `${product}: Nyheten som alle snakker om`,
        `Fungerer ${product} virkelig?`,
        `Lær å kjenne ${product} før det er for sent`,
        `${product} kom til ${country} og forårsaket sensasjon`,
        `${product}-fenomenet endelig forklart`
      ];
    } else if (funnel === 'mid') {
      titleBank = [
        `${product} - Vitenskapelig beviste fordeler`,
        `Hvordan ${product} kan forbedre livskvaliteten din`,
        `${product}: Virkelige resultater i ${country}`,
        `De viktigste fordelene med ${product} forklart`,
        `Hvorfor velge ${product}? Se fordelene`,
        `${product} vs konkurrenter: Sammenlign og bestem`,
        `${product}: Komplett løsning for dine behov`,
        `Forstå hvordan ${product} fungerer trinn for trinn`,
        `${product} - Avansert teknologi innen rekkevidde`,
        `Resultatene av ${product} som du kan forvente`,
        `${product}: Effektivitet bevist i studier`,
        `Hvordan ${product} skiller seg ut i markedet`,
        `${product} - Vitenskapen bak resultatene`,
        `Eksklusive fordeler med ${product} i ${country}`,
        `${product}: Garantert kvalitet og effektivitet`
      ];
    } else {
      titleBank = [
        `Kjøp ${product} nå og betal bare ${price}!`,
        `${product} - Siste enheter for ${price}`,
        `Utnytt! ${product} med 50% rabatt`,
        `${product} - Uforglemmelig tilbud for ${price}`,
        `Sikre din ${product} for bare ${price}`,
        `${product} - Lynrask kampanje for ${price}`,
        `Siste timer: ${product} for ${price}`,
        `${product} - Kjøp i dag og spar!`,
        `Spesialtilbud: ${product} for ${price}`,
        `${product} - Ikke gå glipp av denne muligheten!`,
        `Få ${product} nå for ${price}`,
        `${product} - Eksklusiv rabatt for begrenset tid`,
        `Bestill din ${product} for bare ${price}`,
        `${product} - Tilbud gjelder kun i dag!`,
        `Kjøp ${product} og motta hjemme for ${price}`
      ];
    }
  } else {
    // Fallback para inglês
    if (funnel === 'top') {
      titleBank = [
        `Did you know ${product} can change your life?`,
        `Discover the secret behind ${product}`,
        `What nobody tells you about ${product}`,
        `Why is ${product} so successful?`,
        `The truth about ${product} you need to know`,
        `${product}: The product that's revolutionizing everything`,
        `Finally here: ${product} in ${country}`,
        `Attention: ${product} might be exactly what you're looking for`,
        `Curious: How does ${product} work in practice?`,
        `Be amazed by ${product} results`,
        `${product}: The novelty everyone's talking about`,
        `Does ${product} really work?`,
        `Get to know ${product} before it's too late`,
        `${product} arrived in ${country} and is causing a sensation`,
        `The ${product} phenomenon finally explained`
      ];
    } else if (funnel === 'mid') {
      titleBank = [
        `${product} - Scientifically proven benefits`,
        `How ${product} can improve your quality of life`,
        `${product}: Real results in ${country}`,
        `The main benefits of ${product} explained`,
        `Why choose ${product}? See the advantages`,
        `${product} vs competitors: Compare and decide`,
        `${product}: Complete solution for your needs`,
        `Understand how ${product} works step by step`,
        `${product} - Advanced technology within your reach`,
        `The ${product} results you can expect`,
        `${product}: Efficacy proven in studies`,
        `How ${product} stands out in the market`,
        `${product} - The science behind the results`,
        `Exclusive benefits of ${product} in ${country}`,
        `${product}: Quality and efficiency guaranteed`
      ];
    } else {
      titleBank = [
        `Buy ${product} now and pay only ${price}!`,
        `${product} - Last units for ${price}`,
        `Take advantage! ${product} with 50% discount`,
        `${product} - Unmissable offer for ${price}`,
        `Secure your ${product} for only ${price}`,
        `${product} - Flash promotion for ${price}`,
        `Last hours: ${product} for ${price}`,
        `${product} - Buy today and save!`,
        `Special offer: ${product} for ${price}`,
        `${product} - Don't miss this opportunity!`,
        `Get ${product} now for ${price}`,
        `${product} - Exclusive discount for limited time`,
        `Order your ${product} for only ${price}`,
        `${product} - Offer valid today only!`,
        `Buy ${product} and receive at home for ${price}`
      ];
    }
  }

  // Embaralha e retorna 30 títulos únicos
  const shuffled = [...titleBank].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(30, shuffled.length));
};

const generateDescriptions = (product: string, price: string, country: string, languageCode: string, funnel: string): string[] => {
  const descriptions = [];

  if (funnel === 'cod') {
    // COD Specific Descriptions
    if (languageCode === 'pt') {
      descriptions.push(
        `Compre agora ${product} e tenha a facilidade de pagar somente quando o produto chegar em suas mãos.`,
        `Não perca mais tempo! Adquira ${product} e experimente a comodidade do pagamento na entrega em todo o país.`,
        `Peça já ${product} e aproveite a segurança de pagar somente após receber o produto em sua casa.`,
        `Aproveite essa oportunidade única! Compre ${product} com pagamento facilitado e entrega garantida.`,
        `Experimente ${product} sem preocupações! Pague somente quando o produto for entregue em sua residência.`
      );
    } else if (languageCode === 'es') {
      descriptions.push(
        `Compra ahora ${product} y ten la facilidad de pagar solo cuando el producto llegue a tus manos.`,
        `No pierdas más tiempo! Adquiere ${product} y experimenta la comodidad del pago al recibir en todo el país.`,
        `Pide ya ${product} y aprovecha la seguridad de pagar solo después de recibir el producto en tu casa.`,
        `Aprovecha esta oportunidad única! Compra ${product} con pago facilitado y entrega garantizada.`,
        `Experimenta ${product} sin preocupaciones! Paga solo cuando el producto sea entregado en tu residencia.`
      );
    } else if (languageCode === 'ru') {
      descriptions.push(
        `Купите сейчас ${product} и получите удобство оплаты только при получении товара.`,
        `Не теряйте время! Приобретите ${product} и испытайте удобство оплаты при доставке по всей стране.`,
        `Закажите ${product} сейчас и воспользуйтесь безопасностью оплаты только после получения товара дома.`,
        `Воспользуйтесь этой уникальной возможностью! Покупайте ${product} с удобной оплатой и гарантированной доставкой.`,
        `Испытайте ${product} без забот! Платите только при доставке товара в ваш дом.`
      );
    } else if (languageCode === 'zh') {
      descriptions.push(
        `立即購買${product}，享受貨到付款的便利。`,
        `不要浪費時間！獲得${product}並體驗全國貨到付款的便利。`,
        `立即訂購${product}並享受只在收到產品後付款的安全性。`,
        `抓住這個獨特的機會！購買${product}享受便利付款和保證交貨。`,
        `無憂體驗${product}！只在產品送達您家時付款。`
      );
    } else if (languageCode === 'hi') {
      descriptions.push(
        `अभी ${product} खरीदें और उत्पाद आपके हाथों में आने पर ही भुगतान करने की सुविधा पाएं।`,
        `समय बर्बाद न करें! ${product} प्राप्त करें और पूरे देश में डिलीवरी पर भुगतान की सुविधा का अनुभव करें।`,
        `अभी ${product} ऑर्डर करें और घर पर उत्पाद प्राप्त करने के बाद ही भुगतान करने की सुरक्षा का लाभ उठाएं।`,
        `इस अनूठे अवसर का लाभ उठाएं! आसान भुगतान और गारंटीशुदा डिलीवरी के साथ ${product} खरीदें।`,
        `${product} का बिना चिंता के अनुभव करें! केवल उत्पाद आपके घर पहुंचने पर भुगतान करें।`
      );
    } else if (languageCode === 'pl') {
      descriptions.push(
        `Kup teraz ${product} i ciesz się wygodą płacenia dopiero po otrzymaniu produktu.`,
        `Nie trać czasu! Zdobądź ${product} i doświadcz wygody płatności przy odbiorze w całym kraju.`,
        `Zamów już ${product} i skorzystaj z bezpieczeństwa płacenia dopiero po otrzymaniu produktu w domu.`,
        `Skorzystaj z tej wyjątkowej okazji! Kup ${product} z ułatwioną płatnością i gwarantowaną dostawą.`,
        `Doświadcz ${product} bez zmartwień! Płać tylko wtedy, gdy produkt zostanie dostarczony do twojego domu.`
      );
    } else if (languageCode === 'fi') {
      descriptions.push(
        `Osta nyt ${product} ja nauti mukavuudesta maksaa vasta kun tuote saapuu käsiisi.`,
        `Älä tuhlaa aikaa! Hanki ${product} ja koe postiennakkomaksun mukavuus koko maassa.`,
        `Tilaa jo ${product} ja hyödynnä turvallisuutta maksaa vasta saatuasi tuotteen kotiin.`,
        `Hyödynnä tämä ainutlaatuinen tilaisuus! Osta ${product} helpotetulla maksulla ja taatulla toimituksella.`,
        `Koe ${product} huoletta! Maksa vain kun tuote toimitetaan kotiisi.`
      );
    } else if (languageCode === 'sv') {
      descriptions.push(
        `Köp nu ${product} och njut av bekvämligheten att betala först när produkten kommer i dina händer.`,
        `Slösa inte tid! Skaffa ${product} och upplev bekvämligheten med postförskott i hela landet.`,
        `Beställ redan ${product} och utnyttja säkerheten att betala först efter att ha fått produkten hemma.`,
        `Utnyttja denna unika möjlighet! Köp ${product} med underlättad betalning och garanterad leverans.`,
        `Upplev ${product} utan bekymmer! Betala bara när produkten levereras till ditt hem.`
      );
    } else if (languageCode === 'nl') {
      descriptions.push(
        `Koop nu ${product} en geniet van het gemak om pas te betalen wanneer het product in je handen komt.`,
        `Verspil geen tijd! Verkrijg ${product} en ervaar het gemak van betaling bij aflevering in het hele land.`,
        `Bestel nu ${product} en profiteer van de veiligheid om pas te betalen na ontvangst van het product thuis.`,
        `Profiteer van deze unieke kans! Koop ${product} met vergemakkelijkte betaling en gegarandeerde levering.`,
        `Ervaar ${product} zonder zorgen! Betaal alleen wanneer het product bij je thuis wordt afgeleverd.`
      );
    } else if (languageCode === 'da') {
      descriptions.push(
        `Køb nu ${product} og nyd bekvemmeligheden ved kun at betale, når produktet kommer i dine hænder.`,
        `Spild ikke tiden! Få ${product} og oplev bekvemmeligheden ved betaling ved levering i hele landet.`,
        `Bestil allerede ${product} og udnyt sikkerheden ved kun at betale efter at have modtaget produktet hjemme.`,
        `Udnyt denne unikke mulighed! Køb ${product} med lettet betaling og garanteret levering.`,
        `Oplev ${product} uden bekymringer! Betal kun, når produktet leveres til dit hjem.`
      );
    } else if (languageCode === 'no') {
      descriptions.push(
        `Kjøp nå ${product} og nyt bekvemmeligheten med å betale bare når produktet kommer i hendene dine.`,
        `Ikke kast bort tid! Få ${product} og opplev bekvemmeligheten med betaling ved levering i hele landet.`,
        `Bestill allerede ${product} og utnytt sikkerheten ved å betale bare etter å ha mottatt produktet hjemme.`,
        `Utnytt denne unike muligheten! Kjøp ${product} med lettet betaling og garantert levering.`,
        `Opplev ${product} uten bekymringer! Betal bare når produktet leveres til hjemmet ditt.`
      );
    } else {
      descriptions.push(
        `Buy ${product} now and have the convenience of paying only when the product arrives in your hands.`,
        `Don't waste any more time! Get ${product} and experience the convenience of payment on delivery throughout the country.`,
        `Order ${product} now and enjoy the security of paying only after receiving the product at your home.`,
        `Take advantage of this unique opportunity! Buy ${product} with easy payment and guaranteed delivery.`,
        `Experience ${product} without worries! Pay only when the product is delivered to your residence.`
      );
    }
  } else {
    // General Descriptions based on language
    if (languageCode === 'pt') {
      descriptions.push(
        `Descubra como ${product} pode transformar sua vida. Resultados incríveis em tempo recorde!`,
        `Encontre ${product} com descontos especiais e condições imperdíveis. Não perca essa chance!`,
        `Aproveite todos os benefícios que ${product} oferece e conquiste seus objetivos de forma rápida e eficaz.`,
        `${product} - A solução perfeita para quem busca praticidade, conforto e resultados garantidos.`,
        `Conheça a inovação que ${product} proporciona e surpreenda-se com os resultados que você pode alcançar.`
      );
    } else if (languageCode === 'es') {
      descriptions.push(
        `Descubre cómo ${product} puede transformar tu vida. ¡Resultados increíbles en tiempo récord!`,
        `Encuentra ${product} con descuentos especiales y condiciones imperdibles. ¡No pierdas esta oportunidad!`,
        `Aprovecha todos los beneficios que ${product} ofrece y conquista tus objetivos de forma rápida y eficaz.`,
        `${product} - La solución perfecta para quien busca practicidad, confort y resultados garantizados.`,
        `Conoce la innovación que ${product} proporciona y sorpréndete con los resultados que puedes alcanzar.`
      );
    } else if (languageCode === 'ru') {
      descriptions.push(
        `Откройте для себя, как ${product} может изменить вашу жизнь. Невероятные результаты в рекордные сроки!`,
        `Найдите ${product} со специальными скидками и незабываемыми условиями. Не упустите этот шанс!`,
        `Воспользуйтесь всеми преимуществами, которые предлагает ${product}, и достигните своих целей быстро и эффективно.`,
        `${product} - Идеальное решение для тех, кто ищет практичность, комфорт и гарантированные результаты.`,
        `Познакомьтесь с инновациями, которые предоставляет ${product}, и удивитесь результатам, которых вы можете достичь.`
      );
    } else if (languageCode === 'zh') {
      descriptions.push(
        `發現${product}如何能改變您的生活。創紀錄時間內的驚人結果！`,
        `以特別折扣和不容錯過的條件找到${product}。不要錯過這個機會！`,
        `享受${product}提供的所有好處，快速有效地實現您的目標。`,
        `${product} - 尋求實用性、舒適性和保證結果的完美解決方案。`,
        `了解${product}提供的創新，並對您可以達到的結果感到驚訝。`
      );
    } else if (languageCode === 'hi') {
      descriptions.push(
        `जानें कि ${product} आपके जीवन को कैसे बदल सकता है। रिकॉर्ड समय में अविश्वसनीय परिणाम!`,
        `विशेष छूट और अविस्मरणीय शर्तों के साथ ${product} पाएं। इस मौके को न चूकें!`,
        `${product} द्वारा दिए जाने वाले सभी लाभों का आनंद लें और तेज़ी से और प्रभावी रूप से अपने लक्ष्यों को प्राप्त करें।`,
        `${product} - उन लोगों के लिए सही समाधान जो व्यावहारिकता, आराम और गारंटीशुदा परिणाम चाहते हैं।`,
        `${product} द्वारा प्रदान की जाने वाली नवाचार को जानें और आपके द्वारा प्राप्त किए जा सकने वाले परिणामों से आश्चर्यचकित हों।`
      );
    } else if (languageCode === 'pl') {
      descriptions.push(
        `Odkryj, jak ${product} może zmienić twoje życie. Niesamowite rezultaty w rekordowym czasie!`,
        `Znajdź ${product} ze specjalnymi zniżkami i nie do pominięcia warunkami. Nie przegap tej szansy!`,
        `Ciesz się wszystkimi korzyściami, jakie oferuje ${product} i osiągnij swoje cele szybko i skutecznie.`,
        `${product} - Idealne rozwiązanie dla tych, którzy szukają praktyczności, komfortu i gwarantowanych rezultatów.`,
        `Poznaj innowacje, które zapewnia ${product} i zdziw się wynikami, które możesz osiągnąć.`
      );
    } else if (languageCode === 'fi') {
      descriptions.push(
        `Löydä, miten ${product} voi muuttaa elämäsi. Uskomattomia tuloksia ennätysajassa!`,
        `Löydä ${product} erikoisalennuksilla ja mahtavilla ehdoilla. Älä missaa tätä mahdollisuutta!`,
        `Nauti kaikista ${product}:n tarjoamista eduista ja saavuta tavoitteesi nopeasti ja tehokkaasti.`,
        `${product} - Täydellinen ratkaisu niille, jotka etsivät käytännöllisyyttä, mukavuutta ja taattuja tuloksia.`,
        `Tutustu ${product}:n tarjoamiin innovaatioihin ja hämmästy tuloksista, joita voit saavuttaa.`
      );
    } else if (languageCode === 'sv') {
      descriptions.push(
        `Upptäck hur ${product} kan förändra ditt liv. Otroliga resultat på rekordtid!`,
        `Hitta ${product} med specialerbjudanden och omöjliga villkor att missa. Missa inte denna chans!`,
        `Njut av alla fördelar som ${product} erbjuder och uppnå dina mål snabbt och effektivt.`,
        `${product} - Den perfekta lösningen för dig som söker praktiskhet, komfort och garanterade resultat.`,
        `Lär känna innovationen som ${product} ger och förvånas över resultaten du kan uppnå.`
      );
    } else if (languageCode === 'nl') {
      descriptions.push(
        `Ontdek hoe ${product} je leven kan veranderen. Ongelooflijke resultaten in recordtijd!`,
        `Vind ${product} met speciale kortingen en onmisbare voorwaarden. Mis deze kans niet!`,
        `Geniet van alle voordelen die ${product} biedt en bereik je doelen snel en effectief.`,
        `${product} - De perfecte oplossing voor degenen die praktischheid, comfort en gegarandeerde resultaten zoeken.`,
        `Leer de innovatie kennen die ${product} biedt en verbaas je over de resultaten die je kunt bereiken.`
      );
    } else if (languageCode === 'da') {
      descriptions.push(
        `Opdag, hvordan ${product} kan ændre dit liv. Utrolige resultater på rekordtid!`,
        `Find ${product} med særlige rabatter og uoverstigelige betingelser. Gå ikke glip af denne chance!`,
        `Nyd alle fordelene, som ${product} tilbyder, og opnå dine mål hurtigt og effektivt.`,
        `${product} - Den perfekte løsning for dem, der søger praktiskhed, komfort og garanterede resultater.`,
        `Lær innovationen at kende, som ${product} giver, og bliv overrasket over de resultater, du kan opnå.`
      );
    } else if (languageCode === 'no') {
      descriptions.push(
        `Oppdag hvordan ${product} kan forandre livet ditt. Utrolige resultater på rekordtid!`,
        `Finn ${product} med spesielle rabatter og uimotståelige betingelser. Ikke gå glipp av denne sjansen!`,
        `Nyt alle fordelene som ${product} tilbyr og oppnå målene dine raskt og effektivt.`,
        `${product} - Den perfekte løsningen for de som søker praktiskhet, komfort og garanterte resultater.`,
        `Lær å kjenne innovasjonen som ${product} gir og bli overrasket over resultatene du kan oppnå.`
      );
    } else {
      descriptions.push(
        `Discover how ${product} can transform your life. Incredible results in record time!`,
        `Find ${product} with special discounts and unmissable conditions. Don't miss this chance!`,
        `Enjoy all the benefits that ${product} offers and achieve your goals quickly and effectively.`,
        `${product} - The perfect solution for those seeking practicality, comfort and guaranteed results.`,
        `Discover the innovation that ${product} provides and be amazed by the results you can achieve.`
      );
    }
  }

  return descriptions;
};

const generateUSPs = (product: string, price: string, country: string, languageCode: string, funnel: string): string[] => {
  let uspBank = [];

  if (languageCode === 'pt') {
    uspBank = [
      `Resultados comprovados em tempo recorde`,
      `Entrega rápida e segura em todo o Brasil`,
      `Garantia de satisfação ou seu dinheiro de volta`,
      `Suporte ao cliente 24/7`,
      `Produto exclusivo com tecnologia de ponta`,
      `Aprovado por milhares de clientes satisfeitos`,
      `Frete grátis para todo o ${country}`,
      `Pagamento facilitado em até 12x`,
      `Qualidade premium internacional`,
      `Eficácia testada e comprovada`,
      `Produto 100% original e autêntico`,
      `Envio no mesmo dia da compra`,
      `Atendimento especializado`,
      `Tecnologia inovadora exclusiva`,
      `Resultados visíveis em poucos dias`
    ];
  } else if (languageCode === 'es') {
    uspBank = [
      `Resultados comprobados en tiempo récord`,
      `Entrega rápida y segura en todo el país`,
      `Garantía de satisfacción o le devolvemos su dinero`,
      `Atención al cliente 24/7`,
      `Producto exclusivo con tecnología de punta`,
      `Aprobado por miles de clientes satisfeitos`,
      `Envío gratis a todo ${country}`,
      `Pago facilitado en hasta 12 cuotas`,
      `Calidad premium internacional`,
      `Eficacia testada y comprobada`,
      `Producto 100% original y auténtico`,
      `Envío el mismo día de la compra`,
      `Atención especializada`,
      `Tecnología innovadora exclusiva`,
      `Resultados visibles en pocos días`
    ];
  } else if (languageCode === 'ru') {
    uspBank = [
      `Проверенные результаты в рекордные сроки`,
      `Быстрая и безопасная доставка по всей стране`,
      `Гарантия удовлетворения или возврат денег`,
      `Поддержка клиентов 24/7`,
      `Эксклюзивный продукт с передовыми технологиями`,
      `Одобрено тысячами довольных клиентов`,
      `Бесплатная доставка по всей ${country}`,
      `Удобная оплата до 12 месяцев`,
      `Международное премиум качество`,
      `Проверенная и доказанная эффективность`,
      `100% оригинальный и подлинный продукт`,
      `Отправка в день покупки`,
      `Специализированное обслуживание`,
      `Эксклюзивные инновационные технологии`,
      `Видимые результаты через несколько дней`
    ];
  } else if (languageCode === 'zh') {
    uspBank = [
      `創紀錄時間內的驗證結果`,
      `全國快速安全交貨`,
      `滿意保證或退款`,
      `24/7客戶支援`,
      `具有尖端技術的獨家產品`,
      `獲得數千滿意客戶的認可`,
      `全${country}免費送貨`,
      `最多12期便利付款`,
      `國際優質品質`,
      `經過測試和驗證的功效`,
      `100%原裝正品`,
      `購買當日發貨`,
      `專業客戶服務`,
      `獨家創新技術`,
      `幾天內可見結果`
    ];
  } else if (languageCode === 'hi') {
    uspBank = [
      `रिकॉर्ड समय में सिद्ध परिणाम`,
      `पूरे देश में तेज़ और सुरक्षित डिलीवरी`,
      `संतुष्टि की गारंटी या पैसे वापस`,
      `24/7 ग्राहक सहायता`,
      `अत्याधुनिक तकनीक के साथ विशेष उत्पाद`,
      `हजारों संतुष्ट ग्राहकों द्वारा अनुमोदित`,
      `पूरे ${country} में मुफ्त शिपिंग`,
      `12 महीने तक आसान भुगतान`,
      `अंतर्राष्ट्रीय प्रीमियम गुणवत्ता`,
      `परीक्षित और सिद्ध प्रभावकारिता`,
      `100% मूल और प्रामाणिक उत्पाद`,
      `खरीदारी के दिन शिपिंग`,
      `विशेषज्ञ ग्राहक सेवा`,
      `विशेष नवाचार तकनीक`,
      `कुछ दिनों में दिखाई देने वाले परिणाम`
    ];
  } else if (languageCode === 'pl') {
    uspBank = [
      `Sprawdzone wyniki w rekordowym czasie`,
      `Szybka i bezpieczna dostawa w całym kraju`,
      `Gwarancja satysfakcji lub zwrot pieniędzy`,
      `Obsługa klienta 24/7`,
      `Ekskluzywny produkt z najnowszą technologią`,
      `Zatwierdzony przez tysiące zadowolonych klientów`,
      `Darmowa wysyłka w całym ${country}`,
      `Ułatwiona płatność do 12 rat`,
      `Międzynarodowa jakość premium`,
      `Przetestowana i potwierdzona skuteczność`,
      `100% oryginalny i autentyczny produkt`,
      `Wysyłka w dniu zakupu`,
      `Specjalistyczna obsługa klientów`,
      `Ekskluzywna innowacyjna technologia`,
      `Widoczne rezultaty w ciągu kilku dni`
    ];
  } else if (languageCode === 'fi') {
    uspBank = [
      `Todistetut tulokset ennätysajassa`,
      `Nopea ja turvallinen toimitus koko maahan`,
      `Tyytyväisyystakuu tai rahat takaisin`,
      `Asiakastuki 24/7`,
      `Eksklusiivinen tuote huippuluokan teknologialla`,
      `Hyväksynyt tuhannet tyytyväiset asiakkaat`,
      `Ilmainen toimitus koko ${country}`,
      `Helpotettu maksu jopa 12 erässä`,
      `Kansainvälinen premium-laatu`,
      `Testattu ja todistettu tehokkuus`,
      `100% alkuperäinen ja aito tuote`,
      `Lähetys ostopäivänä`,
      `Erikoistunut asiakaspalvelu`,
      `Eksklusiivinen innovatiivinen teknologia`,
      `Näkyvät tulokset muutamassa päivässä`
    ];
  } else if (languageCode === 'sv') {
    uspBank = [
      `Bevisade resultat på rekordtid`,
      `Snabb och säker leverans i hela landet`,
      `Tillfredsställelsegaranti eller pengarna tillbaka`,
      `Kundstöd 24/7`,
      `Exklusiv produkt med toppmodern teknik`,
      `Godkänd av tusentals nöjda kunder`,
      `Gratis frakt i hela ${country}`,
      `Underlättad betalning upp till 12 delbetalningar`,
      `Internationell premiumkvalitet`,
      `Testad och bevisad effektivitet`,
      `100% original och äkta produkt`,
      `Leverans samma dag som köpet`,
      `Specialiserad kundservice`,
      `Exklusiv innovativ teknik`,
      `Synliga resultat inom några dagar`
    ];
  } else if (languageCode === 'nl') {
    uspBank = [
      `Bewezen resultaten in recordtijd`,
      `Snelle en veilige levering in het hele land`,
      `Tevredenheidsgarantie of geld terug`,
      `Klantenservice 24/7`,
      `Exclusief product met geavanceerde technologie`,
      `Goedgekeurd door duizenden tevreden klanten`,
      `Gratis verzending naar heel ${country}`,
      `Vergemakkelijkte betaling tot 12 termijnen`,
      `Internationale premiumkwaliteit`,
      `Geteste en bewezen effectiviteit`,
      `100% origineel en authentiek product`,
      `Verzending op de dag van aankoop`,
      `Gespecialiseerde klantenservice`,
      `Exclusieve innovatieve technologie`,
      `Zichtbare resultaten binnen enkele dagen`
    ];
  } else if (languageCode === 'da') {
    uspBank = [
      `Beviste resultater på rekordtid`,
      `Hurtig og sikker levering i hele landet`,
      `Tilfredshedsgaranti eller pengene tilbage`,
      `Kundeservice 24/7`,
      `Eksklusivt produkt med banebrydende teknologi`,
      `Godkendt af tusindvis af tilfredse kunder`,
      `Gratis forsendelse til hele ${country}`,
      `Lettet betaling op til 12 rater`,
      `International premium kvalitet`,
      `Testet og bevist effektivitet`,
      `100% originalt og autentisk produkt`,
      `Forsendelse samme dag som købet`,
      `Specialiseret kundeservice`,
      `Eksklusiv innovativ teknologi`,
      `Synlige resultater inden for få dage`
    ];
  } else if (languageCode === 'no') {
    uspBank = [
      `Beviste resultater på rekordtid`,
      `Rask og sikker levering i hele landet`,
      `Tilfredshetgaranti eller pengene tilbake`,
      `Kundeservice 24/7`,
      `Eksklusivt produkt med banebrytende teknologi`,
      `Godkjent av tusenvis av fornøyde kunder`,
      `Gratis frakt til hele ${country}`,
      `Lettet betaling opp til 12 avdrag`,
      `Internasjonal premium kvalitet`,
      `Testet og bevist effektivitet`,
      `100% original og ekte produkt`,
      `Forsendelse samme dag som kjøpet`,
      `Spesialisert kundeservice`,
      `Eksklusiv innovativ teknologi`,
      `Synlige resultater innen få dager`
    ];
  } else {
    uspBank = [
      `Proven results in record time`,
      `Fast and secure delivery throughout the country`,
      `Satisfaction guarantee or your money back`,
      `24/7 customer support`,
      `Exclusive product with cutting-edge technology`,
      `Approved by thousands of satisfied customers`,
      `Free shipping throughout ${country}`,
      `Easy payment in up to 12 installments`,
      `International premium quality`,
      `Tested and proven efficacy`,
      `100% original and authentic product`,
      `Same-day shipping`,
      `Specialized customer service`,
      `Exclusive innovative technology`,
      `Visible results in just a few days`
    ];
  }

  // Embaralha e retorna 10 USPs únicos
  const shuffled = [...uspBank].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(10, shuffled.length));
};

const generateSitelinks = (product: string, price: string, country: string, languageCode: string, funnel: string): { title: string; description1: string; description2: string; url: string; }[] => {
  const sitelinkData = {
    pt: {
      titles: [
        "Compre Agora", "Entrega Garantida", "Pague ao Receber", "Resultados Reais", 
        "Oferta Relâmpago", "Produto Original", "Desconto Exclusivo", "Frete Grátis"
      ],
      descriptions: [
        `${product} com desconto especial`, `Frete grátis para todo o ${country}`, 
        `Cliente só paga ao receber`, `Veja os depoimentos reais`, 
        `Aproveite por ${price}`, `Garantia de autenticidade`, 
        `Entrega rápida e segura`, `Resultados comprovados`, 
        `${product} original`, `Suporte 24 horas`, 
        `Satisfação garantida`, `Promoção limitada`
      ],
      urls: [
        "https://copyfy.shop/compra", "https://copyfy.shop/entrega", 
        "https://copyfy.shop/pagamento", "https://copyfy.shop/resultados",
        "https://copyfy.shop/oferta", "https://copyfy.shop/original"
      ]
    },
    es: {
      titles: [
        "Compra Ahora", "Entrega Garantizada", "Pago Contra Entrega", "Resultados Reais",
        "Oferta Relámpago", "Producto Original", "Descuento Exclusivo", "Envío Gratis"
      ],
      descriptions: [
        `${product} con descuento especial`, `Envío gratis a todo ${country}`,
        `Cliente solo paga al recibir`, `Ve testimonios reales`,
        `Aprovecha por ${price}`, `Garantía de autenticidad`,
        `Entrega rápida y segura`, `Resultados comprobados`,
        `${product} original`, `Soporte 24 horas`,
        `Satisfacción garantizada`, `Promoción limitada`
      ],
      urls: [
        "https://copyfy.shop/compra", "https://copyfy.shop/entrega",
        "https://copyfy.shop/pago", "https://copyfy.shop/resultados",
        "https://copyfy.shop/oferta", "https://copyfy.shop/original"
      ]
    },
    ru: {
      titles: [
        "Купить Сейчас", "Гарантированная Доставка", "Оплата при Получении", "Реальные Результаты",
        "Молниеносная Акция", "Оригинальный Продукт", "Эксклюзивная Скидка", "Бесплатная Доставка"
      ],
      descriptions: [
        `${product} со специальной скидкой`, `Бесплатная доставка по всей ${country}`,
        `Клиент платит только при получении`, `Смотрите реальные отзывы`,
        `Воспользуйтесь за ${price}`, `Гарантия подлинности`,
        `Быстрая и безопасная доставка`, `Проверенные результаты`,
        `Оригинальный ${product}`, `Поддержка 24 часа`,
        `Гарантия удовлетворения`, `Ограниченная акция`
      ],
      urls: [
        "https://copyfy.shop/купить", "https://copyfy.shop/доставка",
        "https://copyfy.shop/оплата", "https://copyfy.shop/результаты",
        "https://copyfy.shop/акция", "https://copyfy.shop/оригинал"
      ]
    },
    zh: {
      titles: [
        "立即購買", "保證交貨", "貨到付款", "真實結果",
        "閃電優惠", "原裝產品", "獨家折扣", "免費送貨"
      ],
      descriptions: [
        `${product}特別折扣`, `全${country}免費送貨`,
        `客戶僅在收到時付款`, `查看真實見證`,
        `以${price}享受`, `真品保證`,
        `快速安全交貨`, `驗證結果`,
        `原裝${product}`, `24小時支援`,
        `滿意保證`, `限時促銷`
      ],
      urls: [
        "https://copyfy.shop/購買", "https://copyfy.shop/交貨",
        "https://copyfy.shop/付款", "https://copyfy.shop/結果",
        "https://copyfy.shop/優惠", "https://copyfy.shop/原裝"
      ]
    },
    hi: {
      titles: [
        "अभी खरीदें", "गारंटीशुदा डिलीवरी", "डिलीवरी पर भुगतान", "वास्तविक परिणाम",
        "तुरंत ऑफर", "मूल उत्पाद", "विशेष छूट", "मुफ्त शिपिंग"
      ],
      descriptions: [
        `${product} विशेष छूट के साथ`, `पूरे ${country} में मुफ्त शिपिंग`,
        `ग्राहक केवल प्राप्त करने पर भुगतान करता है`, `वास्तविक प्रशंसापत्र देखें`,
        `${price} में लाभ उठाएं`, `प्रामाणिकता की गारंटी`,
        `तेज़ और सुरक्षित डिलीवरी`, `सिद्ध परिणाम`,
        `मूल ${product}`, `24 घंटे सहायता`,
        `संतुष्टि की गारंटी`, `सीमित प्रमोशन`
      ],
      urls: [
        "https://copyfy.shop/खरीदें", "https://copyfy.shop/डिलीवरी",
        "https://copyfy.shop/भुगतान", "https://copyfy.shop/परिणाम",
        "https://copyfy.shop/ऑफर", "https://copyfy.shop/मूल"
      ]
    },
    pl: {
      titles: [
        "Kup Teraz", "Gwarantowana Dostawa", "Płatność przy Odbiorze", "Prawdziwe Wyniki",
        "Błyskawiczna Oferta", "Oryginalny Produkt", "Ekskluzywna Zniżka", "Darmowa Wysyłka"
      ],
      descriptions: [
        `${product} ze specjalną zniżką`, `Darmowa wysyłka w całym ${country}`,
        `Klient płaci tylko przy odbiorze`, `Zobacz prawdziwe opinie`,
        `Skorzystaj za ${price}`, `Gwarancja autentyczności`,
        `Szybka i bezpieczna dostawa`, `Potwierdzone wyniki`,
        `Oryginalny ${product}`, `Wsparcie 24 godziny`,
        `Gwarancja satysfakcji`, `Ograniczona promocja`
      ],
      urls: [
        "https://copyfy.shop/kup", "https://copyfy.shop/dostawa",
        "https://copyfy.shop/platnosc", "https://copyfy.shop/wyniki",
        "https://copyfy.shop/oferta", "https://copyfy.shop/oryginal"
      ]
    },
    fi: {
      titles: [
        "Osta Nyt", "Taattu Toimitus", "Maksa Vastaanotossa", "Todelliset Tulokset",
        "Salamantarjous", "Alkuperäinen Tuote", "Eksklusiivinen Alennus", "Ilmainen Toimitus"
      ],
      descriptions: [
        `${product} erikoisalennuksella`, `Ilmainen toimitus koko ${country}`,
        `Asiakas maksaa vain vastaanotossa`, `Katso todelliset suositukset`,
        `Hyödynnä ${price}`, `Aitouden takuu`,
        `Nopea ja turvallinen toimitus`, `Todistetut tulokset`,
        `Alkuperäinen ${product}`, `24 tunnin tuki`,
        `Tyytyväisyystakuu`, `Rajoitettu kampanja`
      ],
      urls: [
        "https://copyfy.shop/osta", "https://copyfy.shop/toimitus",
        "https://copyfy.shop/maksu", "https://copyfy.shop/tulokset",
        "https://copyfy.shop/tarjous", "https://copyfy.shop/alkuperainen"
      ]
    },
    sv: {
      titles: [
        "Köp Nu", "Garanterad Leverans", "Betala vid Mottagning", "Verkliga Resultat",
        "Blixtsnabb Erbjudande", "Original Produkt", "Exklusiv Rabatt", "Gratis Frakt"
      ],
      descriptions: [
        `${product} med specialrabatt`, `Gratis frakt i hela ${country}`,
        `Kunden betalar endast vid mottagning`, `Se verkliga testimonier`,
        `Utnyttja för ${price}`, `Äkthet garanti`,
        `Snabb och säker leverans`, `Bevisade resultat`,
        `Original ${product}`, `24 timmars support`,
        `Tillfredsställelse garanti`, `Begränsad kampanj`
      ],
      urls: [
        "https://copyfy.shop/kop", "https://copyfy.shop/leverans",
        "https://copyfy.shop/betalning", "https://copyfy.shop/resultat",
        "https://copyfy.shop/erbjudande", "https://copyfy.shop/original"
      ]
    },
    nl: {
      titles: [
        "Koop Nu", "Gegarandeerde Levering", "Betaal bij Ontvangst", "Echte Resultaten",
        "Bliksemaanbieding", "Origineel Product", "Exclusieve Korting", "Gratis Verzending"
      ],
      descriptions: [
        `${product} met speciale korting`, `Gratis verzending naar heel ${country}`,
        `Klant betaalt alleen bij ontvangst`, `Zie echte getuigenissen`,
        `Profiteer voor ${price}`, `Echtheidsgarantie`,
        `Snelle en veilige levering`, `Bewezen resultaten`,
        `Originele ${product}`, `24 uur ondersteuning`,
        `Tevredenheidsgarantie`, `Beperkte promotie`
      ],
      urls: [
        "https://copyfy.shop/koop", "https://copyfy.shop/levering",
        "https://copyfy.shop/betaling", "https://copyfy.shop/resultaten",
        "https://copyfy.shop/aanbieding", "https://copyfy.shop/origineel"
      ]
    },
    da: {
      titles: [
        "Køb Nu", "Garanteret Levering", "Betal ved Modtagelse", "Ægte Resultater",
        "Lynhurtigt Tilbud", "Originalt Produkt", "Eksklusiv Rabat", "Gratis Forsendelse"
      ],
      descriptions: [
        `${product} med specialrabat`, `Gratis forsendelse til hele ${country}`,
        `Kunden betaler kun ved modtagelse`, `Se ægte vidnesbyrd`,
        `Udnyt for ${price}`, `Ægthed garanti`,
        `Hurtig og sikker levering`, `Beviste resultater`,
        `Originalt ${product}`, `24 timers support`,
        `Tilfredshed garanti`, `Begrænset kampagne`
      ],
      urls: [
        "https://copyfy.shop/kob", "https://copyfy.shop/levering",
        "https://copyfy.shop/betaling", "https://copyfy.shop/resultater",
        "https://copyfy.shop/tilbud", "https://copyfy.shop/original"
      ]
    },
    no: {
      titles: [
        "Kjøp Nå", "Garantert Levering", "Betal ved Mottak", "Ekte Resultater",
        "Lynraskt Tilbud", "Originalt Produkt", "Eksklusiv Rabatt", "Gratis Frakt"
      ],
      descriptions: [
        `${product} med spesialrabatt`, `Gratis frakt til hele ${country}`,
        `Kunden betaler bare ved mottak`, `Se ekte vitnesbyrd`,
        `Utnytt for ${price}`, `Ekthet garanti`,
        `Rask og sikker levering`, `Beviste resultater`,
        `Originalt ${product}`, `24 timers støtte`,
        `Tilfredshet garanti`, `Begrenset kampanje`
      ],
      urls: [
        "https://copyfy.shop/kjop", "https://copyfy.shop/levering",
        "https://copyfy.shop/betaling", "https://copyfy.shop/resultater",
        "https://copyfy.shop/tilbud", "https://copyfy.shop/original"
      ]
    },
    en: {
      titles: [
        "Buy Now", "Guaranteed Delivery", "Pay on Delivery", "Real Results",
        "Flash Offer", "Original Product", "Exclusive Discount", "Free Shipping"
      ],
      descriptions: [
        `${product} with special discount`, `Free shipping to all ${country}`,
        `Customer only pays on delivery`, `See real testimonials`,
        `Get it for ${price}`, `Authenticity guarantee`,
        `Fast and secure delivery`, `Proven results`,
        `Original ${product}`, `24/7 support`,
        `Satisfaction guaranteed`, `Limited promotion`
      ],
      urls: [
        "https://copyfy.shop/buy", "https://copyfy.shop/delivery",
        "https://copyfy.shop/payment", "https://copyfy.shop/results",
        "https://copyfy.shop/offer", "https://copyfy.shop/original"
      ]
    }
  };

  const data = sitelinkData[languageCode] || sitelinkData.en;
  
  // Função para embaralhar arrays
  const shuffleArray = (array: string[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Embaralha os arrays para gerar variações
  const shuffledTitles = shuffleArray(data.titles);
  const shuffledDescriptions = shuffleArray(data.descriptions);
  const shuffledUrls = shuffleArray(data.urls);

  // Gera 4 sitelinks únicos
  const sitelinks = [];
  for (let i = 0; i < 4; i++) {
    sitelinks.push({
      title: shuffledTitles[i],
      description1: shuffledDescriptions[i * 2],
      description2: shuffledDescriptions[i * 2 + 1],
      url: shuffledUrls[i]
    });
  }

  return sitelinks;
};

export const generateCODCopies = (product: string, price: string, country: string, languageCode: string, funnel: string) => {
  console.log('Generating copies with params:', { product, price, country, languageCode, funnel });
  
  const titles = generateTitles(product, price, country, languageCode, funnel);
  const descriptions = generateDescriptions(product, price, country, languageCode, funnel);
  const usps = generateUSPs(product, price, country, languageCode, funnel);
  const sitelinks = generateSitelinks(product, price, country, languageCode, funnel);
  
  console.log('Generated content:', { titles, descriptions, usps, sitelinks });
  
  return {
    titles,
    descriptions, 
    usps,
    sitelinks
  };
};

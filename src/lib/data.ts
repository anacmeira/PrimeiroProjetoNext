export type Recipe = {
    id: string;
    title: string;
    description: string;
    image: string;
    prepTime: string
    cookTime: string
    servings: number
    ingredients: string[]
    instructions: string[]
    category: string
}


export const recipes: Recipe[] = [
  {
    id: "1",
    title: "Pão de Queijo Mineiro Tradicional",
    description: "O verdadeiro pão de queijo mineiro: casquinha crocante por fora, puxa-puxa por dentro e com muito gosto de queijo curado.",
    image: "/receitas/pao-de-queijo.png",
    prepTime: "20 minutos",
    cookTime: "30 minutos",
    servings: 25,
    ingredients: [
      "500g de polvilho azedo",
      "1 xícara de leite",
      "1/2 xícara de água",
      "1/2 xícara de óleo",
      "3 ovos médios",
      "300g de queijo minas padrão ou canastra ralado",
      "1 colher de sopa de sal"
    ],
    instructions: [
      "Em uma panela, ferva o leite, a água, o óleo e o sal.",
      "Coloque o polvilho em uma tigela grande e despeje o líquido fervente para escaldar. Misture bem com uma colher e deixe esfriar um pouco.",
      "Quando a massa estiver morna, adicione os ovos um a um, misturando com as mãos.",
      "Adicione o queijo ralado e sove bem até a massa ficar homogênea e desgrudar das mãos (se necessário, unte as mãos com um pouco de óleo).",
      "Faça bolinhas, coloque em uma assadeira e asse em forno preaquecido a 180°C por cerca de 30 minutos ou até dourarem ligeiramente.",
      "Sirva quentinho com um café passado na hora!"
    ],
    category: "Café da Manhã"
  },
  {
    id: "2",
    title: "Feijão Tropeiro Completo",
    description: "A receita que alimentava os antigos tropeiros. Um prato robusto, cheio de sabor, perfeito acompanhado de uma couve fininha.",
    image: "/receitas/feijao-tropeiro.png",
    prepTime: "25 minutos",
    cookTime: "40 minutos",
    servings: 6,
    ingredients: [
      "500g de feijão carioca cozido al dente (sem o caldo)",
      "200g de bacon picado",
      "250g de linguiça calabresa ou de porco em rodelas",
      "1 xícara de farinha de mandioca torrada",
      "4 ovos",
      "1 cebola picada",
      "3 dentes de alho amassados",
      "1 maço de couve cortada bem fininha",
      "Sal, pimenta-biquinho e cheiro-verde a gosto"
    ],
    instructions: [
      "Em uma frigideira grande, frite o bacon e a linguiça na própria gordura até ficarem crocantes. Retire e reserve.",
      "Na mesma gordura que ficou na panela, quebre os ovos e mexa delicadamente para que fiquem em pedaços grandes. Retire e reserve.",
      "Adicione um pouquinho mais de gordura se necessário, refogue a cebola e o alho até dourarem.",
      "Coloque a couve picada e refogue rapidamente por apenas 1 minuto (para não murchar demais).",
      "Adicione o feijão cozido escorrido, o bacon, a linguiça e os ovos de volta à panela.",
      "Vá salpipcando a farinha de mandioca aos poucos, misturando com cuidado para o feijão não desmanchar.",
      "Acerte o sal, junte o cheiro-verde e decore com pimenta-biquinho antes de servir."
    ],
    category: "Prato Principal"
  },
  {
  id: "3",
  title: "Doce de Leite de Corte Tradicional",
  description: "O autêntico doce de tacho mineiro. O segredo está em mexer sem parar até dar o ponto de bloco e bater bem depois de desligar o fogo para ficar bem macio.",
  image: "/receitas/doce-leite.png",
  prepTime: "10 minutos",
  cookTime: "40 minutos",
  servings: 12,
  ingredients: [
    "2 litros de leite integral fresco",
    "4 xícaras de açúcar refinado",
    "1 colher de chá de bicarbonato de sódio (segredo para dar a cor bonita)",
    "1 colher de sopa de manteiga para untar a bancada"
  ],
  instructions: [
    "Em um tacho de cobre ou panela de fundo grosso, misture bem o leite, o açúcar e o bicarbonato de sódio.",
    "Leve ao fogo médio para alto, mexendo de vez em quando no início, até a mistura ferver e começar a reduzir.",
    "Assim que o doce começar a engrossar e ganhar aquela cor linda de doce de leite, reduza o fogo para o mínimo e mexa sem parar para não queimar o fundo.",
    "Continue mexendo até o doce soltar totalmente do fundo da panela, atingindo o ponto de bloco (quando você joga um pouco num prato frio e ele não escorre).",
    "Retire a panela do fogo e, com uma colher de pau, bata o doce vigorosamente por cerca de 3 a 5 minutos até ele perder o brilho e começar a açucarar nas bordas.",
    "Despeje o doce rapidamente sobre uma bancada de pedra ou fôrma previamente untada com manteiga, alisando a superfície com uma espátula.",
    "Deixe amornar por alguns minutos e faça os cortes em quadradinhos com uma faca antes que o doce esfrie totalmente e endureça."
  ],
  category: "Sobremesa"
},
{
    id: "4",
    title: "Tutu de Feijão com Torresmo",
    description: "Aquele feijão batido, engrossado com farinha de mandioca e temperado na banha de porco com alho e cebola. Servido bem quentinho com couve e torresmo pururuca.",
    image: "/receitas/tutu-feijao.png",
    prepTime: "20 minutos",
    cookTime: "30 minutos",
    servings: 6,
    ingredients: [
      "4 xícaras de feijão preto ou carioquinha cozido (com o caldo)",
      "1 xícara de farinha de mandioca crua",
      "150g de bacon ou bacon picadinho",
      "1 cebola média picada",
      "3 dentes de alho amassados",
      "Torresmo frito a gosto para finalizar",
      "Couve cortada fininha e refogada para acompanhar",
      "Cheiro-verde, sal e pimenta-do-reino a gosto"
    ],
    instructions: [
      "Bata o feijão cozido no liquidificador com o seu próprio caldo até virar um creme e reserve.",
      "Em uma panela de ferro, frite o bacon até soltar a gordura e dourar. Se necessário, retire o excesso de gordura deixando cerca de 2 colheres de sopa.",
      "Na mesma panela com a gordura do bacon, refogue o alho e a cebola até dourarem.",
      "Despeje o feijão batido na panela, tempere com sal e pimenta-do-reino e deixe levantar fervura.",
      "Reduza o fogo e vá adicionando a farinha de mandioca aos poucos, em chuva, mexendo sem parar para não empelotar, até atingir a consistência de um pirão mole.",
      "Deixe cozinhar por cerca de 5 a 8 minutos para a farinha cozinhar bem.",
      "Transfira para uma travessa, cubra com o bacon frito, cheiro-verde e o torresmo crocante. Sirva com a couve refogada ao lado."
    ],
    category: "Acompanhamento"
  },
  {
    id: "5",
    title: "Canjiquinha com Costelinha de Porco",
    description: "Também conhecida como quirera de milho, cozida lentamente com costelinha de porco frita na própria gordura até derreter na boca. Conforto puro em forma de prato.",
    image: "/receitas/canjiquinha.png",
    prepTime: "30 minutos",
    cookTime: "60 minutos",
    servings: 8,
    ingredients: [
      "1 xícara de canjiquinha de milho (quirera)",
      "800g de costelinha de porco cortada em pedaços pequenos",
      "1 colher de sopa de banha de porco ou óleo",
      "1 cebola grande picada",
      "4 dentes de alho amassados",
      "1 colher de sopa de colorau",
      "Suco de 1 limão",
      "Sal, pimenta-biquinho e pimenta-do-reino a gosto",
      "Cheiro-verde picadinho a gosto"
    ],
    instructions: [
      "Lave a canjiquinha em água corrente e deixe de molho em água morna por 30 minutos.",
      "Tempere as costelinhas de porco com o suco de limão, alho, sal e pimenta-do-reino. Deixe pegar gosto por 20 minutos.",
      "Em uma panela grande, aqueça a banha de porco e frite as costelinhas até ficarem bem douradas. Retire o excesso de óleo que soltar.",
      "Adicione a cebola e o colorau junto à carne e refogue até a cebola murchar.",
      "Escorra a canjiquinha do molho e jogue na panela com a costelinha. Refogue por 2 minutos.",
      "Adicione água fervente aos poucos (cerca de 1,5 a 2 litros no total ao longo do cozimento), mexendo sempre para a canjiquinha não grudar no fundo.",
      "Deixe cozinhar em fogo baixo por cerca de 45 minutos, ou até que o milho esteja macio e o caldo esteja bem grosso e cremoso. Finalize com cheiro-verde e pimenta-biquinho."
    ],
    category: "Prato Principal"
  },
  {
    id: "6",
    title: "Broa de Fubá de Moinho D'Água",
    description: "Aquela broinha de fubá legítima, aerada, perfeita para abrir ao meio e passar uma manteiga que derrete na hora. O verdadeiro acompanhamento do café mineiro.",
    image: "/receitas/broa-fuba.png",
    prepTime: "20 minutos",
    cookTime: "30 minutos",
    servings: 15,
    ingredients: [
      "2 xícaras de fubá mimoso ou de moinho d'água",
      "2 xícaras de farinha de trigo",
      "1 e 1/2 xícara de açúcar",
      "1 colher de sopa de fermento químico em pó",
      "1 colher de sopa de sementes de erva-doce (essencial!)",
      "3 ovos médios",
      "3 colheres de sopa de manteiga em temperatura ambiente",
      "Aproximadamente 1/2 xícara de leite integral (até dar o ponto)"
    ],
    instructions: [
      "Em uma tigela grande, misture bem os ingredientes secos: o fubá, a farinha de trigo, o açúcar, o fermento e as sementes de erva-doce.",
      "Abra um buraco no centro e adicione os ovos levemente batidos e a manteiga.",
      "Misture com as mãos, incorporando os ingredientes. Vá adicionando o leite bem aos poucos, colher por colher, até obter uma massa macia que desgrude das mãos (cuidado para não deixar mole demais).",
      "Pré-aqueça o forno a 180°C e unte uma assadeira grande com manteiga e fubá.",
      "Modele bolinhas do tamanho de uma bola de pingue-pongue. O truque tradicional é passar um pouquinho de fubá nas mãos ou moldar a broinha chacoalhando a massa dentro de uma xícara polvilhada com fubá.",
      "Coloque as broas na assadeira deixando um espaço de 3cm entre elas, pois elas crescem.",
      "Leve ao forno por cerca de 25 a 30 minutos ou até que a base esteja dourada e o topo comece a rachar levemente. Sirva morna!"
    ],
    category: "Café da Tarde"
  },

  {
    id: "7",
    title: "Vaca Atolada Tradicional",
    description: "Costela de boi cozida lentamente com mandioca bem macia, quase desmanchando. Um caldo espesso, suculento e cheio de tempero mineiro.",
    image: "/receitas/vaca-atolada.png",
    prepTime: "25 minutos",
    cookTime: "50 minutos",
    servings: 6,
    ingredients: [
      "1kg de costela bovina cortada em pedaços",
      "800g de mandioca descascada e picada em pedaços médios",
      "1 cebola grande picada",
      "4 dentes de alho amassados",
      "2 tomates maduros picados (sem sementes)",
      "1 colher de sopa de colorau",
      "2 colheres de sopa de óleo ou banha de porco",
      "Cheiro-verde picado a gosto",
      "Sal e pimenta-do-reino a gosto"
    ],
    instructions: [
      "Tempere a costela com o alho, sal e pimenta-do-reino.",
      "Em uma panela de pressão, aqueça o óleo ou banha e doure a costela muito bem de todos os lados.",
      "Adicione a cebola, o tomate e o colorau, refogando até murcharem.",
      "Cubra a carne com água fervente, feche a panela de pressão e cozinhe por 35 minutos após pegar pressão.",
      "Desligue a pressão, abra a panela e adicione os pedaços de mandioca.",
      "Se necessário, adicione mais água quente para cobrir a mandioca. Feche a panela novamente e cozinhe por mais 15 minutos na pressão.",
      "Deixe a pressão sair naturalmente. A mandioca deve estar derretendo e o caldo bem grosso.",
      "Ajuste o sal, salpique bastante cheiro-verde e sirva com arroz branco bem soltinho!"
    ],
    category: "Prato Principal"
  },
  {
    id: "8",
    title: "Ambrosia Mineira do Tacho",
    description: "O famoso doce dos deuses. Leite talhado lentamente com açúcar, canela e cravo, formando gruminhos macios e suculentos na calda.",
    image: "/receitas/ambrosia.png",
    prepTime: "15 minutos",
    cookTime: "45 minutos",
    servings: 10,
    ingredients: [
      "1 litro de leite integral",
      "2 xícaras de açúcar",
      "4 ovos",
      "Suco de 1 limão (para talhar o leite)",
      "2 paus de canela",
      "5 cravos-da-índia",
      "Casca de 1/2 laranja (opcional para dar aroma)"
    ],
    instructions: [
      "Em uma panela de fundo grosso, coloque o açúcar, a canela, os cravos e a casca de laranja. Leve ao fogo médio até o açúcar derreter levemente sem queimar.",
      "Junte o leite e mexa até o açúcar dissolver por completo.",
      "Em uma tigela, bata ligeiramente os ovos apenas para misturar as gemas e claras.",
      "Despeje os ovos batidos e o suco de limão na panela de leite bem quente.",
      "IMPORTANTE: Não mexa muito! Apenas dê leves empurrõezinhos com a colher de pau para que o leite talhe e forme os grumos característicos da ambrosia.",
      "Deixe cozinhar em fogo baixo por cerca de 35 a 40 minutos, até que a calda reduza e fique amarelada/dourada.",
      "Retire os cravos e a canela se preferir, deixe esfriar e leve à geladeira antes de servir."
    ],
    category: "Sobremesa"
  },
  {
    id: "9",
    title: "Bolo de Fubá Cremoso com Queijo",
    description: "Bolo prático de liquidificador que se divide sozinho no forno: uma camada cremosa parecida com pudim no meio e bolo fofinho por fora.",
    image: "/receitas/bolo-fuba-cremoso.png",
    prepTime: "10 minutos",
    cookTime: "40 minutos",
    servings: 12,
    ingredients: [
      "3 ovos",
      "2 xícaras de açúcar",
      "1 xícara de fubá mimoso",
      "3 colheres de sopa de farinha de trigo",
      "2 colheres de sopa de manteiga",
      "4 xícaras de leite integral",
      "50g de queijo meia-cura ou parmesão ralado",
      "1 colher de sopa de fermento químico em pó"
    ],
    instructions: [
      "No liquidificador, bata os ovos, o açúcar, a manteiga e o leite até obter uma mistura líquida homogênea.",
      "Adicione o fubá, a farinha de trigo e o queijo ralado. Bata novamente por 2 minutos.",
      "Por último, adicione o fermento e use a função 'Pulsar' apenas para misturar delicadamente (a massa fica bem líquida mesmo, é normal!).",
      "Despeje a massa em uma fôrma retangular ou redonda untada com manteiga e polvilhada com fubá.",
      "Asse em forno preaquecido a 180°C por cerca de 40 a 45 minutos, ou até que o topo esteja levemente dourado.",
      "Deixe amornar totalmente antes de cortar para que a camada cremosa do meio crie consistência."
    ],
    category: "Café da Tarde"
  }

]
const products = [
    {
        name: 'Alice Adventures in Wonderland',
        author: 'Lewis Carol',
        image: '/images/lewis-carrol-alices-adventures-in-wonderland.webp',
        category: 'adventures',
        language: 'english',
        price: 18.99,
        countInStock: 3,
        description: '',
        rating: 4,
        numReviews: 10,
        ageRange: 'middle-grade',
    },
    {
        name: 'Paddington at the zoo',
        author: 'Michael Bond',
        image: '/images/michael-bond-paddington-at-the-zoo.webp',
        category: 'classic',
        language: 'english',
        price: 12.99,
        countInStock: 3,
        description: '',
        rating: 5,
        numReviews: 10,
        ageRange: 'early-reader',
    },
    {
        name: 'Through the looking glass',
        author: 'Lewis Carol',
        image: '/images/lewis-carrol-through-the-looking-glass.webp',
        category: 'adventures',
        language: 'english',
        price: 16.99,
        countInStock: 3,
        description: '',
        rating: 4,
        numReviews: 1,
        ageRange: 'middle-grade',
    },
    {
        name: 'Charles Darwin',
        author: 'Maria Vegara',
        image: '/images/little-people-big-dreams-charles-darwin.webp',
        category: 'biographies',
        language: 'english',
        price: 13.99,
        countInStock: 7,
        description: '',
        rating: 4,
        numReviews: 1,
        ageRange: 'middle-grade',
    },
    {
        name: 'Paddington at the Palace',
        author: 'Michael Bond',
        image: '/images/michael-bond-paddington.webp',
        category: 'classic',
        language: 'english',
        price: 9.99,
        countInStock: 2,
        description: '',
        rating: 4,
        numReviews: 1,
        ageRange: 'early-reader',
    },
    {
        name: 'Matilda',
        author: 'Roald Dahl',
        image: '/images/roald-dahl-matilda.webp',
        category: 'classic',
        language: 'english',
        price: 11.99,
        countInStock: 6,
        description: '',
        rating: 5,
        numReviews: 4,
        ageRange: 'early-reader',
    },
    {
        name: 'Valse mélancolique. Вибрані твори',
        author: 'Ольга Кобилянська',
        image: '/images/olha-kobylianska-valse-melancolique.jpg',
        category: 'classic',
        language: 'ukrainian',
        price: 11.99,
        countInStock: 2,
        description: '',
        rating: 4,
        numReviews: 1,
        ageRange: 'adult',
    },
    {
        name: 'Я (Романтика)',
        author: 'Микола Хвильовий',
        image: '/images/mykola-hvyliovyi-ya-romantyka.jpg',
        category: 'classic',
        language: 'ukrainian',
        price: 11.99,
        countInStock: 2,
        description: '',
        rating: 4,
        numReviews: 1,
        ageRange: 'adult',
    },
    {
        name: 'Місто',
        author: 'Валерʼян Підмогильний',
        image: '/images/valerian-pidmohylnyi-misto.jpg',
        category: 'classic',
        language: 'ukrainian',
        price: 11.99,
        countInStock: 2,
        description: '',
        rating: 4,
        numReviews: 1,
        ageRange: 'adult',
    },
    {
        name: 'Танець недоумка',
        author: 'Ілларіон Павлюк',
        image: '/images/illarion-pavliuk-tanec-nedoumka.jpg',
        category: 'sci-fi',
        language: 'ukrainian',
        price: 14.99,
        countInStock: 2,
        description: '',
        rating: 4,
        numReviews: 1,
        ageRange: 'adult',
    },
    {
        name: 'Дім Солі',
        author: 'Світлана Тараторіна',
        image: '/images/svitlana-taratorina-dim-soli.jpg',
        category: 'sci-fi',
        language: 'ukrainian',
        price: 13.99,
        countInStock: 2,
        description: '',
        rating: 3,
        numReviews: 1,
        ageRange: 'adult',
    },
    {
        name: 'Shadow and Bone',
        author: 'Leigh Bardugo',
        image: '/images/leigh-bardugo-shadow-and-bone.jpg',
        category: 'fantasy',
        language: 'dutch',
        price: 16.99,
        countInStock: 5,
        description: '',
        rating: 4,
        numReviews: 1,
        ageRange: 'young-adult',
    },
    {
        name: 'Kraai & Koninkrijk',
        author: 'Leigh Bardugo',
        image: '/images/leigh-bardugo-kraai-en-koninkrijk.jpg',
        category: 'fantasy',
        language: 'dutch',
        price: 14.99,
        countInStock: 2,
        description: '',
        rating: 5,
        numReviews: 1,
        ageRange: 'young-adult',
    },
    {
        name: 'Im Westen nichts Neues',
        author: 'Erich Maria Remarque',
        image: '/images/remarque-im-westen-nichts-neues.jpg',
        category: 'classic',
        language: 'german',
        price: 11.99,
        countInStock: 2,
        description: '',
        rating: 5,
        numReviews: 4,
        ageRange: 'adult',
    },
    {
        name: 'Narziß und Goldmund',
        author: 'Hermann Hesse',
        image: '/images/hermann-hesse-narziss-und-goldmund.jpg',
        category: 'classic',
        language: 'german',
        price: 9.99,
        countInStock: 2,
        description: '',
        rating: 4,
        numReviews: 1,
        ageRange: 'adult',
    },
    {
        name: 'Sherlock Holmes: The Complete Novels and Stories, Volume I',
        author: 'Arthur Conan Doyle',
        image: '/images/sherlock-holmes-the-complete-novels-and-stories.jpg',
        category: 'detective',
        language: 'english',
        price: 19.99,
        countInStock: 5,
        description: '',
        rating: 4,
        numReviews: 1,
        ageRange: 'adult',
    },
    {
        name: 'Friends, Lovers, and the Big Terrible Thing',
        author: 'Matthew Perry',
        image: '/images/matthew-perry-friends-lovers-and-the-big-terrible-thing.jpg',
        category: 'biographies',
        language: 'english',
        price: 19.99,
        countInStock: 2,
        description: '',
        rating: 4,
        numReviews: 1,
        ageRange: 'adult',
    },
];

export default products;
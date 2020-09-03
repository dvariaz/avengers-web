const { PUBLIC_URL } = process.env;

const backgrounds = [
    //Home Backgrounds
    `${PUBLIC_URL}/assets/Backgrounds/Wakanda/Wakanda.jpg`,
    `${PUBLIC_URL}/assets/Backgrounds/Titan/Titan.jpg`,
    `${PUBLIC_URL}/assets/Backgrounds/NewYorkSanctum/NewYorkSanctum.jpg`,
    `${PUBLIC_URL}/assets/Backgrounds/Knowhere/Knowhere.jpg`,
    //Synopsis Backgrounds
    `${PUBLIC_URL}/assets/Items/Gauntlet/Background.jpg`,
    `${PUBLIC_URL}/assets/Items/General/Background.jpg`,
    `${PUBLIC_URL}/assets/Items/MindGem/Background.jpg`,
    `${PUBLIC_URL}/assets/Items/PowerGem/Background.jpg`,
    `${PUBLIC_URL}/assets/Items/RealityGem/Background.jpg`,
    `${PUBLIC_URL}/assets/Items/SoulGem/Background.jpg`,
    `${PUBLIC_URL}/assets/Items/SpaceGem/Background.jpg`,
    `${PUBLIC_URL}/assets/Items/TimeGem/Background.jpg`,
    //Cast Backgrounds
    `${PUBLIC_URL}/assets/Characters/BlackWidow/Background.png`,
    `${PUBLIC_URL}/assets/Characters/CaptainAmerica/Background.jpg`,
    `${PUBLIC_URL}/assets/Characters/DoctorStrange/Background.jpg`,
    `${PUBLIC_URL}/assets/Characters/Hulk/Background.png`,
    `${PUBLIC_URL}/assets/Characters/IronMan/Background.jpg`,
    `${PUBLIC_URL}/assets/Characters/StarLord/Background.jpg`,
    `${PUBLIC_URL}/assets/Characters/Thor/Background.jpg`,
    //Gallery Backgrounds
    `${PUBLIC_URL}/assets/Cast/ChrisEvans.jpg`,
    `${PUBLIC_URL}/assets/Cast/ChrisHemsworth.jpg`,
    `${PUBLIC_URL}/assets/Cast/ChrisPatt.jpg`,
    `${PUBLIC_URL}/assets/Cast/JoshBrolin.jpg`,
    `${PUBLIC_URL}/assets/Cast/RobertDowneyJr.jpg`,
    `${PUBLIC_URL}/assets/Cast/ScarlettJohansson.jpg`,
];

const items = [
    `${PUBLIC_URL}/assets/Items/Gauntlet/Item.png`,
    `${PUBLIC_URL}/assets/Items/Gauntlet/Effect.png`,
    `${PUBLIC_URL}/assets/Items/General/Item.png`,
    `${PUBLIC_URL}/assets/Items/General/Effect.png`,
    `${PUBLIC_URL}/assets/Items/MindGem/Item.png`,
    `${PUBLIC_URL}/assets/Items/MindGem/Effect.png`,
    `${PUBLIC_URL}/assets/Items/PowerGem/Item.png`,
    `${PUBLIC_URL}/assets/Items/PowerGem/Effect.png`,
    `${PUBLIC_URL}/assets/Items/RealityGem/Item.png`,
    `${PUBLIC_URL}/assets/Items/RealityGem/Effect.png`,
    `${PUBLIC_URL}/assets/Items/SoulGem/Item.png`,
    `${PUBLIC_URL}/assets/Items/SoulGem/Effect.png`,
    `${PUBLIC_URL}/assets/Items/SpaceGem/Item.png`,
    `${PUBLIC_URL}/assets/Items/SpaceGem/Effect.png`,
    `${PUBLIC_URL}/assets/Items/TimeGem/Item.png`,
    `${PUBLIC_URL}/assets/Items/TimeGem/Effect.png`,
];

const characters = [
    //Home Characters
    `${PUBLIC_URL}/assets/Backgrounds/Wakanda/BlackPanther.png`,
    `${PUBLIC_URL}/assets/Backgrounds/Wakanda/BlackWidow.png`,
    `${PUBLIC_URL}/assets/Backgrounds/Wakanda/CaptainAmerica.png`,
    `${PUBLIC_URL}/assets/Backgrounds/Titan/Thanos.png`,
    `${PUBLIC_URL}/assets/Backgrounds/NewYorkSanctum/DoctorStrange.png`,
    //Cast Characters
    `${PUBLIC_URL}/assets/Characters/BlackWidow/Render.png`,
    `${PUBLIC_URL}/assets/Characters/CaptainAmerica/Render.png`,
    `${PUBLIC_URL}/assets/Characters/DoctorStrange/Render.png`,
    `${PUBLIC_URL}/assets/Characters/Hulk/Render.png`,
    `${PUBLIC_URL}/assets/Characters/IronMan/Render.png`,
    `${PUBLIC_URL}/assets/Characters/StarLord/Render.png`,
    `${PUBLIC_URL}/assets/Characters/Thor/Render.png`,
];

const resources = [...backgrounds, ...items, ...characters];

export default resources;

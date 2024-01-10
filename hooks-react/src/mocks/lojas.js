import green from "../../assets/produtores/green.png";
import grow from "../../assets/produtores/grow.png";

const random = (min,max) => {
    return Math.floor(Math.random() * (max - min +1) + min);
}

export default lojas = {
    list: [
        {
            id: 1,
            nome: 'Green',
            imagem: green,
            distancia: `${random(1, 500)}m`,
            estrelas: random(1, 5)
        },
        {
            id: 2,
            nome: 'Grow',
            imagem: grow,
            distancia: `${random(1, 500)}m`,
            estrelas: random(1, 5)
        }
    ]
};
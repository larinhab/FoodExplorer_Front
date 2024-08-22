import salad_ravanello from '../assets/refeicoes/salad_ravanello.png'
import salad_ceasar from '../assets/refeicoes/salad_ceasar.png'
import spaguetti_gambe from '../assets/refeicoes/spaguetti_gambe.png'
import toast_parma from '../assets/refeicoes/toast_parma.png'

import cooffe from '../assets/bebidas/cooffe.png'
import juice_maracuja from '../assets/bebidas/juice_maracuja.png'
import tea_annis from '../assets/bebidas/tea_annis.png'
import tea_apple from '../assets/bebidas/tea_apple.png'

import macarons from '../assets/sobremesas/macarons.png'
import cake_damasco from '../assets/sobremesas/cake_damasco.png'
import pastrie_peachy from '../assets/sobremesas/pastrie_peachy.png'
import pie_ameixa from '../assets/sobremesas/pie_ameixa.png'

export const data = {
    refeicao: [
        {
            id: 1, 
            category: 'refeição', 
            name: 'Salada Ravanello', 
            image: salad_ravanello, 
            price: '29,90', 
            description: 'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.',
            tags: "alface, tomate, cebola, limão, manjericão, pepino"  
        },
        {
            id: 2, 
            category: 'refeição', 
            name: 'Salada Ceasar', 
            image: salad_ceasar , 
            price: '29,90', 
            description: 'É uma opção deliciosa e leve, uma combinação de alface, filé de frango grelhado, croutons crocantes e o molho à base de queijo parmesão.',
            tags: "alface, croutons, frango, molho, parmesão"  
        },
        {
            id: 3, 
            category: 'refeição', 
            name: 'Spaguetti Gambé', 
            image: spaguetti_gambe , 
            price: '59,90', 
            description: 'Massa caseira fresca deliciosa com camarões e molho pesto. ' ,
            tags: "arroz, camarão, cebola, limão, parmesão, tomate, vinho branco",
        },
        {
            id: 4, 
            category: 'refeição', 
            name: 'Torradas Parma', 
            image: toast_parma , 
            price: '39,90', 
            description: 'Presunto de parma e rúcula em um pão com fermentação natural.',
            tags: "alface, maionese, parma, presunto, pão, queijo"   
        },        
    ],
    
    bebidas: [
        {
            id: 5, 
            category: 'bebidas', 
            name: 'Espresso', 
            image: cooffe , 
            price: '6,90',
            description: 'Café cremoso feito na temperatura e pressão perfeitas.',
            tags: "açúcar, café, leite" 
        },
        {
            id: 6, 
            category: 'bebidas', 
            name: 'Suco Maracujá', 
            image: juice_maracuja , 
            price: '8,90', 
            description: 'Suco de maracujá gelado, cremoso, docinho.',
            tags: "creme de leite, maracujá, leite condensado" 
        },
        {
            id: 7, 
            category: 'bebidas', 
            name: 'Tè d`autunno', 
            image: tea_annis, 
            price: '11,90', 
            description: 'Chá de anis, canela e limão. Sinta o outono italiano.' 
        },
        {
            id: 8, 
            category: 'bebidas', 
            name: 'Pomo', 
            image: tea_apple, 
            price: '13,90', 
            description: 'Um coquetel sem desperdício que usa aparas de maçã para criar uma deliciosa mistura de tequila' },

    ],
    
    sobremesas: [
        {
            id: 9, 
            category: 'sobremesas', 
            name: 'Bolo de Damasco', 
            image: cake_damasco, 
            price: '15,90', 
            description: 'É um bolo de sabor agradável e requintado, textura macia e úmida.' 
        },
        {
            id: 10, 
            category: 'sobremesas', 
            name: 'Macarons', 
            image: macarons, price: '9,90', 
            description: 'Farinha de amêndoas, manteiga, claras e açúcar.',
            tags: "amêndoas. açúcar, chocolate, ovo"
        },
        {
            id: 11, 
            category: 'sobremesas', 
            name: 'Prugna Pie', 
            image: pie_ameixa, 
            price: '17,90', 
            description: 'Torta de ameixa com massa amanteigada, polvilho em açucar.' 
        },
        {
            id: 12, 
            category: 'sobremesas', 
            name: 'Peachy Pastrie', 
            image: pastrie_peachy , 
            price: '19,90', 
            description: 'Delicioso folheado de pêssego com folhas de hortelã.' 
        },
    ],
}

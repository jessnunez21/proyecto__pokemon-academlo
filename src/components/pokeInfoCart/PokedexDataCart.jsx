import { Bar } from "react-chartjs-2";
import Chart, { CategoryScale } from 'chart.js/auto';
import '../Pokedex/styles/pokedexInfo.css'

Chart.register(CategoryScale);
const PokedexDataCart = ({ pokemon }) => {
    let nameTest = []  
    pokemon?.stats.map(info =>(
        nameTest.push((info.stat.name))
        )); 
        
        let pokeItems = []
        pokemon?.stats.map(stat =>(
            pokeItems.push((stat.base_stat))
            )); 
            const data = {
                labels: [
                    ...nameTest
                    
                ],
                datasets: [{
                    label: 'habilidades',
                    backgroundColor: '#db1a1a',
                    borderColor: 'red',
                    borderWidth: 1,
                    hoverBackgroundColor: 'blue',
                    hoverBorderColor: '#ff0000',
                    data: [
                        ...pokeItems
                    ]
                    
                }]
            }
            const opciones = {
                maintainAspectRatio: false,
                responsive: true,
            }
            
            
            return (
                <div className="content__stat" >
            <h2 className="stst__information">Stats Information</h2>
            <hr className="linear-stat"/>
            <Bar data={data} options={opciones} />
        </div>
    )
}

export default PokedexDataCart
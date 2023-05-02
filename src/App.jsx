import "./App.css";
import Fruit from "./components/Fruit/Fruit";

const data = [
    {id:1, img:'https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?s=2048x2048&w=is&k=20&c=y-vQTuSseLrreXAfueKeeXMwyYV9Pgw4Pt_V0tbxbl8=', title:'Apple', uom:'02', size:'02', unit:'$9.99', total:'$17.89'},
    {id:2, img:'https://media.istockphoto.com/id/173242750/photo/banana-bunch.jpg?b=1&s=170667a&w=0&k=20&c=0tf5f84ouowwcY08dpp6XrWUTLJLL_dWwjqAlyueU60=', title:'Banana', uom:'02', size:'03', unit:'$12.99', total:'$24.89'},
    {id:3, img:'https://media.istockphoto.com/id/157638609/photo/a-pile-of-fresh-apricots-on-a-white-background.jpg?b=1&s=170667a&w=0&k=20&c=yJdru4wSCKhkBTsATtoXe6v8IVtMwWXoQ42DvuUfIDY=', title:'Apricot', uom:'02', size:'02', unit:'$15.99', total:'$7.89'},
    {id:4, img:'https://media.istockphoto.com/id/1295773461/photo/purple-grape-isolated-on-white-background-clipping-path-full-depth-of-field.jpg?s=2048x2048&w=is&k=20&c=AUb_kGumOtEb0N1gBVNRn2_pNqlQlFBnTQvKBNILF40=', title:'Grape', uom:'02', size:'06', unit:'$7.99', total:'$14.89'},
    {id:5, img:'https://media.istockphoto.com/id/465956594/photo/mango.jpg?s=2048x2048&w=is&k=20&c=bcu728msV29ugD6J7g89b4ZyNqYP4lXOdbTgxXAgOkM=', title:'Mango', uom:'02', size:'07', unit:'$19.99', total:'$26.89'},
    {id:6, img:'https://media.istockphoto.com/id/1357864202/photo/mandarine-orange-fruits-or-tangerines-isolated-on-white-background-fresh-mandarine-close-up.jpg?b=1&s=170667a&w=0&k=20&c=7eEcfgZ2noRhb8eer8qX-gI_rhaO2Jfhb1Q6WqyEPFc=', title:'Orange', uom:'02', size:'02', unit:'$11.99', total:'$22.89'},
    {id:7, img:'https://media.istockphoto.com/id/1321448019/photo/ripe-juicy-watermelon-isolated-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=jeHDIwKywoDuZuF-3naj6tA_sfYfIlncg8iCepYGoJ8=', title:'Watermelon', uom:'02', size:'08', unit:'$10.99', total:'$42.89'},
    {id:8, img:'https://media.istockphoto.com/id/172862474/photo/pineapple-a-ripe-fresh-fruit-food-whole-isolated-on-white.jpg?s=2048x2048&w=is&k=20&c=Gdl67QEp-Lk-rurlEIL-dbRV5orLVZAm5kDPSDlGFRU=', title:'Pinapple', uom:'02', size:'05', unit:'$5.99', total:'$31.89'},
    {id:9, img:'https://media.istockphoto.com/id/1326679614/photo/cherry-isolated-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=JURPhKcrVbEJC4M9XR27suh9mEKg-gmYL4sYqc7z4m8=', title:'Cherry', uom:'02', size:'07', unit:'$3.99', total:'$7.89'},
    {id:10, img:'https://media.istockphoto.com/id/1307162991/photo/raspberry-isolated-two-red-raspberries-with-green-leaf-isolate-raspberry-with-leaves-isolated.jpg?b=1&s=170667a&w=0&k=20&c=vq602CqsB320Jqddb9QKm3ATGDN2cY8IxUw9-dp9k_Q=', title:'Raspberry', uom:'02', size:'02', unit:'$7.99', total:'$27.89'},
]



function App() {

  return (
    <div className="container">
      <div className="fruits">
        {
            data.map((val) => {
                return (
                    <Fruit data={val} />
                )
            })
        }
      </div>
    </div>
  );
}

export default App;

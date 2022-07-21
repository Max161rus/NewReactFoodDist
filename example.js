 class Compon extends React.Component{
	constructor(props){
		super(props);
		
		this.state = {
			data: 0
		}
	}
	
	newMethodInc ()  {
		if(this.state.data < 10) {
				this.setState(state => ({
					 data: state.data + 1
				}))
			}
	}
	
	newMethodDec ()  {
		if(this.state.data >  -10) {
				this.setState(state => ({
					 data: state.data - 1
				}))
			}
	}
	
	randMethod () {
		let rand = 100;
			while(rand > 10 || rand < -10 ){
				rand = Math.round((Math.random() + this.state.data) * Math.random() * 10)
			}
				if(rand < 5){
					rand = rand * -1
				}		
					this.setState(state => ({
						 data: rand
					}))
	}
	
	resetMethod() {
			this.setState(state => ({
				 data: 0
			}))
	}
	
	render(){
	
	const {text, stlDiv, stlBut, classDiv, h1Class} = this.props;
	const {data} = this.state;
	 
	
		return (
		
			<div className={stlDiv}>
			
				<h1 className={h1Class}>{text}</h1>
				
				<h1 className={h1Class}>{data}</h1>
				
				<div className={classDiv}>
				
					<button onClick={() => this.newMethodInc()} className={stlBut}>Plus</button>
					
					<button onClick={() => this.newMethodDec()} className={stlBut}>Minus</button>
					
					<button onClick={() => this.randMethod()} className={stlBut}>Random</button>
					
					<button onClick={() => this.resetMethod()} className={stlBut}>Reset</button>
				
				</div>
				
			</div>
			
			);
	}
}

const App = () => {

return(
	<div className="app">
		<Compon text="Hello world!" stlBut="stlBut" stlDiv="stlDiv" h1Class="h1Class"/>
		<Compon text="Hello world!" stlBut="stlBut" stlDiv="stlDiv" h1Class="h1Class"/>
		<Compon text="Hello world!" stlBut="stlBut" stlDiv="stlDiv" h1Class="h1Class"/>
		<Header/>
	</div>
)

}

ReactDOM.render(<App/>, document.getElementById("container")) 
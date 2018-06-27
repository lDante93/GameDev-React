//Imports
var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
require("./css/index.css");

var NavComponent = createReactClass({
    render() {
        return (
			<div id="nav">
				<ol>
					<li><a href="#">Strona Główna</a></li>
					<li><a href="#">Nasze gry</a>
						<ul>
						<li><a href="#">Clicker Game</a></li>
						<li><a href="#">Sim RPG</a></li>
						<li><a href="#">Turret Defence</a></li>
						<li><a href="#">BitCoin Miner</a></li>
						</ul>
					
					</li>
					<li><a href="#">Nasza Ekipa</a>
						<ul>
						<li><a href="#">Programiści</a></li>
						<li><a href="#">Graficy</a></li>
						<li><a href="#">Animatorzy</a></li>
						<li><a href="#">Dźwiękowcy</a></li>				
						</ul>
					</li>
					<li><a href="#">Kontakt</a></li>
				</ol>
			</div>
            );
        }
});

var ContentComponent = createReactClass({
    render() {
        return(
			<div id="content">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu justo nec augue pulvinar viverra eu in eros. Nunc pellentesque condimentum lorem vitae tempor. Proin ultricies lectus sit amet felis fermentum lobortis. Vivamus ante arcu, maximus non suscipit eget, cursus in ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis pellentesque, velit at aliquam egestas, risus dolor scelerisque ex, id vestibulum ipsum leo nec lectus. Nunc id fringilla metus. Nullam ullamcorper tellus mi, sodales pellentesque lacus tempor ut. Pellentesque vel justo pretium enim consequat pharetra. Nulla lobortis interdum felis eget rutrum. Aliquam facilisis neque sagittis magna imperdiet, ut lacinia dui sollicitudin. Aliquam at efficitur velit. Sed et libero vel eros sagittis dictum. Vestibulum eu nulla quis tellus sodales efficitur. 
				</p>

				<p>Praesent et pulvinar leo. Proin sed est nec magna suscipit vulputate at sit amet tortor. Duis neque felis, accumsan nec tincidunt vitae, maximus in velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec aliquam, metus id finibus elementum, libero lorem vestibulum risus, eget imperdiet velit odio non felis. Curabitur quis risus eget elit accumsan interdum sit amet nec lorem. Fusce ac condimentum velit. Aliquam quis erat et risus condimentum mollis. Curabitur sem ipsum, rhoncus non erat nec, pellentesque mattis lectus. Phasellus efficitur magna condimentum lorem ultrices, at facilisis neque auctor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
				</p>

				<p>Sed at nulla id risus venenatis venenatis. Vivamus non felis a risus sagittis consequat. Nunc non accumsan justo, sit amet mollis leo. Integer ac nibh id nunc vulputate blandit. Cras eleifend velit a augue consequat congue. Mauris congue efficitur tempus. Quisque tristique nisi a risus lobortis tincidunt. Sed porta nibh metus, sed tristique nisi posuere sit amet. Etiam hendrerit tellus vel venenatis pharetra. Vestibulum sed tincidunt justo, vel malesuada turpis. 
				</p>

				<p>Sed tristique nunc et metus cursus tempor. Aenean condimentum tempus elit a pellentesque. Morbi rutrum eget augue eu venenatis. Mauris mollis sollicitudin felis id tempor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam quis feugiat magna, non mollis eros. Sed tempus viverra enim, nec elementum dolor tincidunt ut. Aliquam condimentum erat quis dolor scelerisque tempor. Sed sit amet ligula ante. In auctor convallis tortor pulvinar pulvinar. Nunc quis purus urna. Quisque justo urna, fringilla sit amet scelerisque vitae, ullamcorper eu dolor. Duis rutrum mi ac elementum interdum. Proin rhoncus suscipit lorem non tincidunt. Praesent a justo nisl. Donec condimentum convallis diam ac facilisis. 
				</p>

				<p>Curabitur mollis id ipsum nec vestibulum. Maecenas eu mollis eros, ac porttitor odio. Proin nec justo ex. Sed massa nulla, tincidunt non lobortis id, rhoncus quis tortor. Aliquam venenatis leo et tincidunt blandit. Cras finibus arcu erat, nec auctor massa tristique a. Proin sed sem congue, congue orci pulvinar, elementum quam. 
				</p>
			</div>
        );
    }
});

var SocialsComponent = createReactClass({
    render() {
        return(
			<div id="social">
				<div id ="socialdivs">
					<div id="fb"><i className="icon-facebook"></i></div>
					<div id="yt"><i className="icon-youtube"></i></div>
					<div id="tw"><i className="icon-twitter"></i></div>
					<div id="gp"><i className="icon-gplus"></i></div>
					<div style ={{clear: "both"}}></div>
				</div>
			</div>
        );
    }
});	

var FooterComponent = createReactClass({
    render() {
        return(
			<div id="footer">
				StackTruckStudio &copy; 2018 Copyrights Reserved
			</div>
        );
    }
});

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="wrapper">
				<div id="header">
					<div id="logo">
						<img src ="pad.png" height="13%"  style ={{padding: "3px 10px 0 10px", float: "left"}}/>
						<div style ={{padding: "5px 5px"}}><span style={{color: "#c9360f"}}>Stuck</span>Truck<span style={{color: "#c9360f"}}>Studio</span></div>
						<div style ={{clear: "both"}}></div>
					</div>
					<NavComponent />
					<ContentComponent />
					<FooterComponent />
					<SocialsComponent />
				</div>
			</div>
		)
	}
}

//Put component
ReactDOM.render(<App/>, document.getElementById('app'));
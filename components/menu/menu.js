import Link from 'next/link';
import SocialMedia from '../social-media/social-media';
import Triangle from '../shapes/triangle/triangle';

const Menu = () => (
	<div className="menu">
		<Triangle classes={`menu-background menu-background-enlarged`} />
		<div className="menu-inner">
			<ul className="menu-list">
				<li><Link href="/team"><a className="menu-item-red">Team</a></Link></li>
				<li className="menu-item-spaced"><Link href="/services"><a className="menu-item-green">Services</a></Link></li>
				<li className="menu-item-spaced-double"><Link href="/work"><a className="menu-item-blue">Work</a></Link></li>
				<li className="menu-item-spaced-triple"><Link href="/contact"><a className="menu-item-yellow">Contact</a></Link></li>
			</ul>

			<ul className="menu-list menu-list-sub menu-inner-no-margin">
				<li className="menu-item-spaced-quadruple"><Link href="/updates"><a>Updates</a></Link></li>
				<li className="menu-item-spaced-quintuple"><Link href="/playground"><a>Playground</a></Link></li>
			</ul>

			<SocialMedia />
		</div>
	</div>
);


export default Menu;

//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

bands.sort((a,b) => {
	 a=a.replace(/^(a |an |the )/i, '');
	b=b.replace(/^(a |an |the )/i, '');
	return a.localeCompare(b);
});

const ul=document.getElementById("bands");
bands.forEach((band)=>{
	const li=document.createElement("li");
	li.innerText=band;
	ul.appendChild(li);
})
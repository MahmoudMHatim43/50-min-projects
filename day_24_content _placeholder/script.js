const coverImg = document.getElementById("cover_img");
const letter = document.getElementById("letter");
const profilePic = document.getElementById("profile_pic");
const infos = document.querySelectorAll(".personal_info");
const user_name = document.getElementById("name");
const spans = document.querySelectorAll("span");
console.log(spans);

setTimeout(() => {
	coverImg.classList.remove("ani_img");
	coverImg.style.backgroundImage = `url('https://img.goodfon.com/wallpaper/big/b/f9/code-laptop-programming-coding.jpg')`;
	spans.forEach(span => {
		span.classList.remove("ani_text");
	});
	letter.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Id enim atque iure hic
        officia doloribus aspernatur illo debitis dolor ex, quia voluptate ipsa sint aliquam.`;
	profilePic.classList.remove("ani_img");
	profilePic.style.backgroundImage = `url('https://prompti.ai/wp-content/uploads/2023/07/pcboi2.png')`;
	infos.forEach(info => {
		info.classList.remove("ani_text");
		infos[0].innerHTML = `<i class="fas fa-envelope"></i> mahmoudmhatim@gmail.com`;
		infos[1].innerHTML = `<i class="fas fa-phone"></i> +012 3456 789`;
		infos[2].innerHTML = `<i class="fas fa-map-marker-alt"></i> Doha, Qatar`;
	});
	user_name.innerHTML = `Mahmoud M hatim`;
}, 4000);

<template>
	<section class="container">

		<div class="column is-half is-offset-one-quarter custom-mt-6">
			<p class="subtitle is-4 has-text-primary has-text-centered" data-cy="website-description">An overview of Studio Ghibli universe</p>
		</div>

		<section class="hero is-primary custom-mt-5 custom-ml-5 custom-mr-5 custom-b-5 custom-gradient">
			<div class="hero-body">
				<div class="container has-text-centered">
					<div class="has-background-white custom-mr-6 custom-ml-6 custom-b-2">
						<h1 class="title has-text-primary is-uppercase" data-cy="website-title">
							Studio Ghibli
							<br>
							<span class="jpn-text">スタジオジブリ</span>
						</h1>
					</div>
				</div>
			</div>
		</section>

		<div class="column is-half is-offset-one-quarter">
			<figure>
				<img alt="Logo" class="" src="../assets/mi-vecino-totoro.png">
			</figure>
		</div>

	</section>
</template>


<style>
.jpn-text {
	font-size: 0.8em;
	color: tomato;
	word-break: keep-all;
}

.custom-gradient {
	-webkit-mask-image: -webkit-gradient(linear, left top, left bottom,
    from(rgba(0,0,0,1)), to(rgba(0,0,0,0.8)));
}
</style>

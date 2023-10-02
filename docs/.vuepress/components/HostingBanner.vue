<template>
	<div class="banner">
		<p>Host Your Static Site With Kinsta for Free!</p>
		<a
			href="https://kinsta.com/docs/static-site-hosting/"
			target="_blank"
			class="btn"
			>Read More</a
		>
	</div>
</template>

<style scoped>
	.banner {
		background: rgb(156, 85, 34);
		background: linear-gradient(
			90deg,
			rgba(156, 85, 34, 1) 0%,
			rgba(32, 50, 103, 1) 42%,
			rgba(13, 18, 25, 1) 69%,
			rgba(22, 47, 60, 1) 100%
		);
		color: #fff;
		padding: 20px;
		border-radius: 5px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.banner p {
		width: 600px;
		font-size: 40px;
		font-weight: bold;
		text-align: center;
		line-height: 50px;
	}

	.banner .btn {
		border-radius: 5px;
		padding: 15px;
		color: #1f1f1f;
		font-weight: bold;
		background: #fff;
		display: inline-block;
		margin-bottom: 10px;
	}

	.banner .btn:hover {
		background: #111319;
		color: #fff;
	}
</style>

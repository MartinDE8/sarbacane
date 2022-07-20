<?php
    $baseUrl = "https://" . $_SERVER['SERVER_NAME'];

	$success = false;
	$error = false;
	$warning = false;

	if(!empty($_GET['response'])){

        switch ($_GET['response']){
            case 'success':
                $success = true;
                break;
            case 'empty-field':
                $error = true;
                break;
            case 'naf-exists':
                $warning = true;
        }
	}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">

	<title>Sarbacane Suite - Inscription conférence Annuelle</title>
	<meta name="description" content="Sarbacane Suite - Inscription conférence Annuelle">

	<link rel="icon" href="favicon.ico"/>
	<link  rel="stylesheet" href="assets/styles/app.css">
</head>
<body>

<section id="form-sarbacane">
	<div class="h-full flex flex-col lg:flex-row">

		<!-- Left section -->
		<div class="col-left lg:w-5/12" style="background-image: url('./assets/img/background.webp')">
			<div class="col-left__inner">
				<img class="mb-10" src="./assets/img/logo.svg" alt="Logo Sarbacane suite">
				<h1 class="title-1 mb-8">Vous êtes invité !</h1>
				<p class="mb-6">Afin de comptabiliser votre inscription à cet événement, veuillez remplir le formulaire ci-dessous. Il ne vous prendra que quelque secondes !</p>
				<p class="mb-6">Nous vous fournirons l'ensemble des informations supplémentaires sur l'événement directement par e-mail après confirmation de votre participation.</p>
				<a href="#" class="btn btn-purple">Voir le programme</a>
			</div>

		</div>

		<!-- Right section : form -->
		<div class="col-right lg:w-7/12">
			<div class="col-right__inner">
				<h2 class="title-2 mb-2">Inscription Conférence Annuelle</h2>
				<h3 class="title-3 mb-6">Le 23 septembre à partir de 18h00<br>
				<span class="text-purple">Grand Palais Paris</span></h3>


				<form action="process.php" method="post" class="contactForm flex flex-wrap">

					<div class="input-wrapper w-full sm:w-1/2 sm:pr-3">
						<label for="name">Nom</label>
						<input class="input" type="text" id="name" name="name" required>
					</div>

					<div class="input-wrapper w-full sm:w-1/2 sm:pl-3">
						<label for="surname">Prénom</label>
						<input class="input" type="text" id="surname" name="surname" required>
					</div>

					<div class="input-wrapper w-full sm:w-1/2 sm:pr-3">
						<label for="email">Email</label>
						<input class="input" type="email" id="email" name="email" required>
					</div>

					<div class="input-wrapper w-full sm:w-1/2 sm:pl-3">
						<label for="tel">Téléphone</label>
						<input class="input" type="tel" id="tel" name="tel" required>
					</div>

					<div class="input-wrapper w-full sm:w-1/2 sm:pr-3">
						<label for="company">Société</label>
						<input class="input" type="text" id="company" name="company" required>
					</div>

					<div class="input-wrapper w-full sm:w-1/2 sm:pl-3">
						<label for="address">Adresse</label>
						<input class="input" type="text" id="address" name="address" required>
					</div>

					<div class="input-wrapper w-full sm:w-1/2 sm:pr-3">
						<label for="cp">Code postal</label>
						<input class="input" type="text" id="cp" name="cp" required>
					</div>

					<div class="input-wrapper w-full sm:w-1/2 sm:pl-3">
						<label for="city">Ville</label>
						<div class="autocomplete-container">
							<input id="autoCompletVille" class="input w-full" type="text" id="city" name="city" required>
						</div>

					</div>

					<div class="input-wrapper w-full sm:w-1/2 sm:pr-3">
						<label for="siren">SIREN</label>
						<div class="autocomplete-container">
							<input class="input w-full" type="text" id="siren" name="siren" required>
						</div>
					</div>

					<div class="input-wrapper w-full sm:w-1/2 sm:pl-3 mb-3">
						<label for="naf">Code NAF</label>
						<div class="autocomplete-container">
							<input class="input w-full" type="text" id="naf" name="naf" required>
						</div>
					</div>

					<div class="input-wrapper w-full">
						<button disabled type="submit" class="btn btn-purple submitForm">Valider l'inscription</button>
					</div>
				</form>

				<?php if($success): ?>
					<div class="form-notif success">
						<p>Votre entregistrement est pris en compte. Merci !</p>
						<a class="close-notif" href="<?= $baseUrl; ?>">
							<img src="./assets/img/cancel.webp" alt="Fermer la notification">
						</a>
					</div>
				<?php endif; ?>

                <?php if($error): ?>
					<div class="form-notif error">
						<p>Veuillez remplir tous les champs pour soumettre le formulaire.</p>
						<a class="close-notif" href="<?= $baseUrl; ?>">
							<img src="./assets/img/cancel.webp" alt="Fermer la notification">
						</a>
					</div>
                <?php endif; ?>

                <?php if($warning): ?>
					<div class="form-notif warning">
						<p>Le code NAF renseigné est déja enregistré.</p>
						<a class="close-notif" href="<?= $baseUrl; ?>">
							<img src="./assets/img/cancel.webp" alt="Fermer la notification">
						</a>
					</div>
                <?php endif; ?>
			</div>
		</div>
	</div>
</section>

<script src="./assets/scripts/manifest.js"></script>
<script src="./assets/scripts/vendor.js"></script>
<script src="./assets/scripts/main.js"></script>
</body>
</html>

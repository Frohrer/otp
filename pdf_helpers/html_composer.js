import { generateRandomString, generateOutputString } from './helper_functions.js'

const document_maker = async () => {
	let html_document =
	`<!doctype html>
	<html lang="en">
		<head>
			<meta charset="utf-8">
			<meta name="viewport" content="width=device-width, initial-scale=1">
			<title>One Time Pad</title>
			<!-- CSS only -->
			<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
			<style>
				body { 
					font-size:small !important;
				}
				h5 {
					font-size: medium !important;
				}
				h4 {
					font-size: large !important;
				}
				table {
					border-collapse: collapse;
					width: 100%;
				}  
				th, td {
				padding: 0.2rem;
				text-align: center;
				vertical-align: middle;
				}
			</style>
			<style media="print">
				@media print {
					.pagebreak { page-break-before: always; } /* page-break-after works, as well */
				}
			</style>
		</head>
		<body>
			<div class="row mt-0" name="page=1" id='page=1'>
			</div>
			<div class="container text-center">
				<div class="row mt-5">
					<div class="mx-auto" style="width: 300px;">
						<h3>One Time Pad</h3>
					</div>
				</div>
				<div class="row mt-5 mb-5">
					<div class="mx-auto" style="width: 400px;">
						<h3>${generateRandomString(8)}</h3>
					</div>
				</div>
			</div>
			<hr />
			<div class="container text-center mt-5 mb-5">
				<figure class="text-end">
					<blockquote class="blockquote">
						<p>Destroy after reading.</p>
					</blockquote>
					<figcaption class="blockquote-footer">
						-
					</figcaption>
				</figure>
			</div>
			<hr />
            <div class="pagebreak"></div>
			<div class="container my-5">
                <h1 class="text-center">Instructions for Using a One-Time Pad</h1>
				<div class="col-md-6">
					<h3>Step 1: Use this pad as a random key</h3>
					<p>Use this document as a string of random characters that is at least as long as the message you want to encrypt.</p>
				</div>
				<div class="col-md-6">
					<h3>Step 2: Write down the message</h3>
					<p>Write down the message you want to encrypt. The message can be any text, but it must not contain any characters that are not in the one time pad.</p>
				</div>
				<div class="col-md-6">
					<h3>Step 3: Encrypt the message</h3>
					<p>To encrypt the message, you must combine each character in the message with the corresponding character in the one time pad using modular addition. To do this, convert each character in the message and the key to a number using a character set that maps each character to a unique number. Then add the corresponding numbers together, and take the result modulo the size of the character set. Convert the resulting number back to a character using the same character set.</p>
				</div>
				<div class="col-md-6">
					<h3>Step 4: Send the encrypted message</h3>
					<p>Send the encrypted message to the recipient through a secure channel, such as an encrypted email or a secure messaging app.</p>
				</div>
				<div class="col-md-6">
					<h3>Step 5: Decrypt the message</h3>
					<p>To decrypt the message, the recipient must use the same one time pad (or the twin) that was used to encrypt the message. Combine each character in the encrypted message with the corresponding character in the key using modular subtraction. To do this, convert each character in the encrypted message and the key to a number using the same character set as before. Then subtract the corresponding numbers, and take the result modulo the size of the character set. Convert the resulting number back to a character using the same character set.</p>
				</div>
				<div class="col-md-6">
					<h3>Step 6: Read the decrypted message</h3>
					<p>The result of step 5 is the original message that was encrypted.</p>
				</div>
            </div>
            ${generateOutputString(50)}
			<!-- JavaScript Bundle with Popper -->
			<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
			<script src="/test.js" crossorigin="anonymous"></script>
		</body>
	</html>
`
	return html_document
}

export { document_maker }

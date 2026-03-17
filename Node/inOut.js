const annon = process.argv.indexOf('-a') !== -1
console.log(annon)

if(annon) {
    process.stdout.write('Oi Anônimo!\n') // chamando node inOut.js -a
} else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n', '')

        process.stdout.write(`Oi ${nome}!\n`)
        process.exit()
    })
}


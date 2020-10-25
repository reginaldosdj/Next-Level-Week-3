const database = require('./db');
const saveOrphanage = require('./saveOrphanage');

database.then(async db => {
    //inserir dados na tabela
    await saveOrphanage(db, {

        lat: "-22.955671",
        lng: "-43.176044",
        name: "Lar da paz",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "999999999",
        images: [
            "https://images.unsplash.com/flagged/photo-1576042854593-1f6eebfcfb0c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1562790519-76a1627de754?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 11h até 23h ",
        open_on_weekends: "1"
    })

    //consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //consultar apenas 1 orfanato por ID
    const orphanage = await db.all(`SELECT * FROM orphanages WHERE id = '1'`)
    console.log (orphanage)

     //deletar dado da tabela
    //console.log( await db.run("DELETE FROM orphanages WHERE id>'1'"))
})
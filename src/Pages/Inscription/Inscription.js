import React from 'react'



function Inscription() {
    return (
        <div>
            <form action='' method='POST'>
                <label htmlFor="Nom">Nom </label>
                <input type='text' id='nom' name='Nom' />
                <label htmlFor="Prenom">Prenom</label>
                <input type='text' id='prenom' name='Prenom' />
                <label htmlFor="Naissance">Naissance </label>
                <input type='Date' id='naissance' name='Naissance' />
                <label htmlFor="Ville">Ville</label>
                <input type='text' id='ville' name='Ville' />
                <label htmlFor="Telephone">Telephone</label>
                <input type='text' id='phone' name='Telephone' />
                <input type='submit' name='submit' value="subscribe" />

            </form>
        </div>
    )
}

export default Inscription
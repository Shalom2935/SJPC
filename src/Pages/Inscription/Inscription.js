import React from 'react'

function Inscription() {
  return (
    <div>
        <form action='' method=''>
            <label htmlFor="Nom">Nom </label>
            <input type='text' name='Nom'/>
            <label htmlFor="Prenom">Prenom</label>
            <input type='text' name='Prenom'/>
            <label htmlFor="Naissance">Naissance </label>
            <input type='Date' name='Naissance'/>
            <label htmlFor="Ville">Ville</label>
            <input type='text' name='Ville'/>
            <label htmlFor="Telephone">Telephone</label>
            <input type='text' name='Telephone'/>
            <input type='submit' name='submit' value="subscribe"/>

        </form>
    </div>
  )
}

export default Inscription
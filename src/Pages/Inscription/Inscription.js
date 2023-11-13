import React from 'react'

function Inscription() {
  return (
    <div>
        <form action=''>
            <label htmlFor="Nom">Nom </label>
            <input type='text' name='Nom'/>
            <label htmlFor="Prenom">Prenom</label>
            <input type='text' name='Prenom'/>
            <label htmlFor="Naissance">Naissance </label>
            <input type='Date' name='Naissance'/>
            <label htmlFor="Ville">Ville</label>
            <input type='text' name='Ville'/>

        </form>
    </div>
  )
}

export default Inscription
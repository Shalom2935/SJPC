import React from 'react';
import './Contact.scss'
//import ButtonSmall from '../../components/Buttons/buttonSmall'
//import '../../components/Header/Header.scss'

function Contact() {
  return (
    // <div>
    //   // <ul className='navbar-items'>
    //   //   <li>ACCUEIL</li>
    //   //   <li><StyledLink to='/Contact'>CONTACT</StyledLink></li>
    //   //   <li><ButtonSmall /></li>
    //   {/* </ul> */}
    // </div>
    <main>
      <header>
        <div className="email">sjpcommunity1st@gmail.com</div>
        <div className="logo">Logo</div>
      </header>
      <div className="container">
      <div className="intro">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_106_192)">
              <path d="M9.375 16.25C8.26248 16.25 7.17494 15.9201 6.24992 15.302C5.32489 14.6839 4.60392 13.8054 4.17818 12.7776C3.75243 11.7498 3.64104 10.6188 3.85808 9.52762C4.07512 8.43648 4.61085 7.4342 5.39752 6.64753C6.18419 5.86086 7.18647 5.32513 8.27762 5.10809C9.36876 4.89104 10.4998 5.00244 11.5276 5.42818C12.5554 5.85392 13.4339 6.57489 14.052 7.49992C14.6701 8.42495 15 9.51248 15 10.625C14.9983 12.1163 14.4052 13.5461 13.3506 14.6007C12.2961 15.6552 10.8663 16.2483 9.375 16.25ZM9.375 7.5C8.75693 7.5 8.15275 7.68328 7.63884 8.02666C7.12494 8.37004 6.7244 8.8581 6.48788 9.42912C6.25135 10.0001 6.18947 10.6285 6.31005 11.2347C6.43062 11.8409 6.72825 12.3977 7.16529 12.8347C7.60233 13.2718 8.15915 13.5694 8.76534 13.69C9.37153 13.8105 9.99987 13.7486 10.5709 13.5121C11.1419 13.2756 11.63 12.8751 11.9733 12.3612C12.3167 11.8473 12.5 11.2431 12.5 10.625C12.5 9.7962 12.1708 9.00134 11.5847 8.41529C10.9987 7.82924 10.2038 7.5 9.375 7.5ZM18.75 25C18.748 23.343 18.0889 21.7544 16.9172 20.5828C15.7456 19.4111 14.157 18.752 12.5 18.75H6.25C4.59301 18.752 3.00445 19.4111 1.83277 20.5828C0.661102 21.7544 0.00198482 23.343 0 25L0 30H2.5V25C2.5 24.0054 2.89509 23.0516 3.59835 22.3484C4.30161 21.6451 5.25544 21.25 6.25 21.25H12.5C13.4946 21.25 14.4484 21.6451 15.1517 22.3484C15.8549 23.0516 16.25 24.0054 16.25 25V30H18.75V25ZM21.875 11.25C20.7625 11.25 19.6749 10.9201 18.7499 10.302C17.8249 9.68394 17.1039 8.80543 16.6782 7.7776C16.2524 6.74976 16.141 5.61876 16.3581 4.52762C16.5751 3.43648 17.1109 2.4342 17.8975 1.64753C18.6842 0.860857 19.6865 0.325127 20.7776 0.108085C21.8688 -0.108957 22.9998 0.00243723 24.0276 0.42818C25.0554 0.853923 25.9339 1.57489 26.552 2.49992C27.1701 3.42495 27.5 4.51248 27.5 5.625C27.4983 7.11634 26.9052 8.54612 25.8506 9.60065C24.7961 10.6552 23.3663 11.2483 21.875 11.25ZM21.875 2.5C21.2569 2.5 20.6527 2.68328 20.1388 3.02666C19.6249 3.37004 19.2244 3.8581 18.9879 4.42912C18.7514 5.00014 18.6895 5.62847 18.81 6.23466C18.9306 6.84085 19.2283 7.39767 19.6653 7.83471C20.1023 8.27175 20.6592 8.56938 21.2653 8.68996C21.8715 8.81054 22.4999 8.74865 23.0709 8.51213C23.6419 8.2756 24.13 7.87506 24.4733 7.36116C24.8167 6.84726 25 6.24307 25 5.625C25 4.7962 24.6708 4.00134 24.0847 3.41529C23.4987 2.82924 22.7038 2.5 21.875 2.5ZM30 20C29.998 18.343 29.3389 16.7544 28.1672 15.5828C26.9956 14.4111 25.407 13.752 23.75 13.75H18.75V16.25H23.75C24.7446 16.25 25.6984 16.6451 26.4017 17.3484C27.1049 18.0516 27.5 19.0054 27.5 20V25H30V20Z" fill="#F7F3F3"/>
              </g>
              <defs>
              <clipPath id="clip0_106_192">
              <rect width="30" height="30" fill="white"/>
              </clipPath>
              </defs>
            </svg>
            <h1>Entrer en contact</h1>
          </div>
        <form action="">
          <div className="personal-info">
            <input type="text" name='Nom' placeholder='Nom' />
            <input type="text" name='Prenom' placeholder='Prenom'/>
            <input type="email" name='Email' placeholder='Email'/>
            <select name="Niveau" id="">
              <option value="null">Niveau</option>
              <option value="0">Je ne suis pas étudiant</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <select name="Spécialité" id="">
              <option value="null">Filière</option>
              <option value="1">GIT</option>
              <option value="2">GME</option>
              <option value="3">GP</option>
              <option value="4">GCI</option>
              <option value="5">GMI</option>
            </select>
          </div>
          <input type="textarea" placeholder='Veuillez nous renseigner sur votre préoccupation...'/>
          {/* <ButtonSmall /> */}
        </form>
      </div>
      
    </main>
  )
}

export default Contact;
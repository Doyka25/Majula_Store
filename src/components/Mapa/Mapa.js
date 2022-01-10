import React from 'react';
 
class Mapa extends React.Component {
 
  render() {
 
    return (
 
        <div className="embed-responsive embed-responsive-4by3">
            <iframe className="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.550910463782!2d-77.02240288578628!3d-12.142849547000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b7f0489266fb%3A0x378b260d5c75ac5d!2sMiraflores%2C%20Barranco%2015063!5e0!3m2!1ses-419!2spe!4v1641847506468!5m2!1ses-419!2spe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>

    )
    
  }
 
}
 
export default Mapa;
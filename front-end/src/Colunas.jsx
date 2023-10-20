import { Button } from '@mui/material';

function Colunas(){
    return (
        <div className="container text-center">
        <div className="row align-items-start">
          <div className="col">
          </div>
          <div className="col">
            <p className="fs-1"> 
            <Button variant="contained" size="large" >Ciência da Computação</Button>
            </p>
          </div>
          <div className="col">
          </div>
        </div>
      </div>   
    );
}

export default Colunas;
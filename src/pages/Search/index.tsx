import ButtonPattern from 'core/components/ButtonPattern';
import { ErroReq, GitResponse } from 'core/type/GitResponse';
import { makeRequest } from 'core/utils/request';

import React, { useState } from 'react';
import CardSearch from './components/CardSearch';
import ImageLoader from './components/Loader/ImageLoader';
import InfoLoader from './components/Loader/InfoLoader';
import './styles.scss';

type FormState = {
    repository: string;
}



type EventForm = React.ChangeEvent<HTMLInputElement>;

const MySearch = () => {

    const [isLoading, setIsLoading] = useState(false);

    const [gitData, setGitData] = useState<GitResponse>();
    const [erroReq, setErroReq] = useState<ErroReq>({
        message: '',
        reqReturn: 404
    });

    const [formData, setFormData] = useState<FormState>({
        repository: '',
    })

    const handleOnChange = (event: EventForm) => {
        const attribute = event.target.name;
        const value = event.target.value;
        //console.log(attribute, value);
        setFormData(data => ({
            ...data, [attribute]: value
        }));
        //console.log(formData);
    }

    const  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const urlInput = `/${formData.repository}`;
        //formData.repository === '' ? setTemErro(true) : setTemErro(false);

        setIsLoading(true);
        makeRequest({ url: urlInput })
            .then(response => {
                setGitData(response.data);
                setErroReq(req => ({
                    ...req,
                    reqReturn: response.status,
                    message: response.data
                }));

            })
            .catch((error) => {
                setErroReq(req => ({
                    ...req,
                    reqReturn: error.response.status,
                    message: error.response.data
                }));

                //console.log(error.response.status);
            })
            .finally(() => {
                setIsLoading(false);

            });
        //console.log(erroReq)
    }


    return (
        <>
        {console.log(erroReq)}
            <div className="content-result"  >
                <form onSubmit={handleSubmit}>                   
                    <div className="card-blue">
                        <h4 className="label-titulo" >Encontre um perfil Github</h4>
                        <input
                            required
                            className="input-name"
                            type="text"
                            name="repository"
                            value={formData.repository}
                            onChange={handleOnChange}
                        />
                        <div >
                            <ButtonPattern text="Encontrar" />
                        </div>
                    </div>

                </form>
                    {

                        isLoading ? (<div className="card-gray">
                            <ImageLoader />
                            <InfoLoader />
                        </div>) : (gitData && <CardSearch gitResp={gitData} erro={erroReq} />)
                    }
                </div>
        </>
    )
};

export default MySearch;


/**
 *
 *
 * if (error.response) {


                    console.log('1 error.response.data: ' + JSON.stringify(error.response.data.message));
                    console.log('2 error.response.status: ' + JSON.stringify(error.response.status));
                    console.log('3 error.response.headers: ' + JSON.stringify(error.response.headers));


                } else if (error.request) {

                    console.log('4 error.request: ' + error.request);
                } else {
                    // Something happened in setting up the request and triggered an Error
                    console.log('Error', JSON.stringify(error.message));
                }
                //console.log('5 error.config: ' + JSON.stringify(error.config));
 */
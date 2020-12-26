import ButtonPattern from 'core/components/ButtonPattern';
import { ErroReq, GitResponse } from 'core/type/GitResponse';
import React from 'react';
import LabelMedium from '../CardLabels/LabelMedium';
import LabelSmall from '../CardLabels/LabelSmall';
import './styles.scss';

type Props = {
    gitResp: GitResponse,
    erro: ErroReq
}

const CardSearch = ({ gitResp, erro }: Props) => {

    //console.log('Requisição card: '+ erro.reqReturn)
    return erro.reqReturn !== 404 ? (
        <div className="card-gray2">
            <div className="content-git">
                <img className="git-img" src={gitResp.avatar_url} alt="Avatar do Usuário" />
                <div className="git-data" >

                    <LabelSmall
                        title="Repositórios públicos"
                        info={gitResp.public_repos}
                    />
                    <LabelSmall
                        title="Seguidores"
                        info={gitResp.followers}
                    />
                    <LabelSmall
                        title="Seguindo"
                        info={gitResp.following}
                    />
                    <div className="big-card">
                        <h1 className="informations" >Informações</h1>
                        <LabelMedium
                            title="Empresa"
                            info={gitResp.company}
                        />
                        <LabelMedium
                            title="Website/Blog"
                            info={gitResp.blog}
                        />
                        <LabelMedium
                            title="Localidade"
                            info={gitResp.location}
                        />
                        <LabelMedium
                            title="Membro desde"
                            info={gitResp.created_at}
                        />

                    </div>
                </div>
            </div>
            <div>
                <br />
                <a href={gitResp.html_url} target='blank'>
                    <ButtonPattern
                        text="Ver Perfil"
                    />
                </a>

            </div>
        </div>
    ) : (
            <div>
                <img
                    src='https://i.gifer.com/Bm7F.gif'
                    alt="Avatar do Usuário" />
                <h1>
                    Houve um erro! <br />
                        Não foi possível localizar o Usuário!!
                    </h1>
            </div>
        )

}

export default CardSearch;


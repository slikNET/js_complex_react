import React from 'react';

const Company = ({company}) => {
    return (
        <div className={'user-company'}>
            <h3>Company:</h3>
            <p>
                {company?.name && <span>Name: <strong>{company.name}</strong>, </span>}
                {company?.catchPhrase && <span>Catch Phrase: <strong>{company.catchPhrase}</strong>, </span>}
                {company?.bs && <span>BS: <strong>{company.bs}</strong></span>}
            </p>
        </div>
    );
};

export default Company;
const constants = {
    baseUrl: "https://femijuris.com.br",
    authLocalStorageKey: 'femijwt',
    facebookLink: "https://www.facebook.com/femijuris",
    instagramLink: "https://instagram.com/femijuris",
    linkedinLink: "https://www.linkedin.com/company/11388144",
    internalLinks: {
        directory: {
            development: 'http://localhost:3002/diretorio',
            production: 'https://femijuris.com.br/diretorio'
        }
    },
    api: {
        registerNewsLetterEmail: {
                    development:    'http://localhost:3001/lawyer/register_newsletter',
                    production:   'https://mmizo6sjz5.execute-api.us-west-2.amazonaws.com/production/lawyer/register_newsletter'
        },
        fetchEbookByUrl: {
            development:    'http://localhost:3001/guerrilla/fetch_ebook_by_uri',
            production:   'https://mmizo6sjz5.execute-api.us-west-2.amazonaws.com/production/guerrilla/fetch_ebook_by_uri'
        },
        getAllLawyersFunction: {
            development:    'http://localhost:3000/lawyer/fetch_all',
            production:   'https://dqe29idfc7.execute-api.us-west-2.amazonaws.com/production/lawyer/fetch_all'
        },
        sendMsgToLawyerUrl: {
            development:    'http://localhost:3000/lawyer/send_msg_to_lawyer',
            production:   'https://dqe29idfc7.execute-api.us-west-2.amazonaws.com/production/lawyer/send_msg_to_lawyer'
        },
        registerEmailForEbookUrl: {
            development:    'http://localhost:3001/guerrilla/register_email_for_ebook',
            production:   'https://mmizo6sjz5.execute-api.us-west-2.amazonaws.com/production/guerrilla/register_email_for_ebook'
        },
        adminFetchAllLawyers: {
            development:    'http://localhost:3000/lawyer/fetch_all',
            production:   'https://dqe29idfc7.execute-api.us-west-2.amazonaws.com/production/lawyer/fetch_all'
        },
        adminUpdateLawyerPendingStatus: {
            development:    'http://localhost:3000/lawyer/approve',
            production:   'https://dqe29idfc7.execute-api.us-west-2.amazonaws.com/production/lawyer/approve'
        },
        fetchLawyer: {
            development:    'http://localhost:3000/lawyer/fetch',
            production:   'https://dqe29idfc7.execute-api.us-west-2.amazonaws.com/production/lawyer/fetch'
        },
        getFilteredCityOptions: {
            development:    'http://localhost:3000/location/cities',
            production:   'https://dqe29idfc7.execute-api.us-west-2.amazonaws.com/production/location/cities'
        },
        getFilteredSpecialtiesOptions: {
            development:    'http://localhost:3000/lawyer/specialties',
            production:   'https://dqe29idfc7.execute-api.us-west-2.amazonaws.com/production/location/cities'
        },
        getGeocodingAddress: {
            development:  'http://localhost:3000/maps/geocoding_request',
            production:   'http://localhost:3000/maps/geocoding_request'
        },
        login: {
            development:  'http://localhost:3000/auth/signin',
            production:   'http://localhost:3000/auth/signin'
        }
    },
    errorCodes: {
        EMAIL_ALREADY_EXISTS: 'EMAIL_ALREADY_EXISTS',
        EMAIL_CHECKS_FAILED: 'EMAIL_CHECKS_FAILED',
        REGISTER_LAWYER_ERROR: 'REGISTER_LAWYER_ERROR',
        SEND_LAWYER_SUCC_EMAIL_FAILED: 'SEND_LAWYER_SUCC_EMAIL_FAILED',
        UNKNOWN: 'UNKNOWN'
    },
    services: {
        user_pool: {
            IDENTITY_POOL_ID: 'us-west-2:f47d1565-5ba8-41df-99f9-f23c1fc92f46',
            USER_POOL_ID: 'us-west-2_YfbQHwy5j',
            USER_POOL_WEB_CLIENT_ID: '1o5fpchgehc642a1c1u1fjccu5',
        },
        social: {
            GOOGLE_CLIENT_ID: '852744102695-gcnjevgdsifblmoeiul6ub2qb527nabl.apps.googleusercontent.com',
            FACEBOOK_APP_ID: '265556510743181'
        }
    }

}

export default constants
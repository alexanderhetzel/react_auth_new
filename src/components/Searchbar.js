import React, {useEffect, useState} from "react";
import {useAuth0} from "@auth0/auth0-react";
import searchEngine from "./Searchengine";
import ActiveDirectory from "activedirectory2";


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const Searchbar = () => {
    const {isAuthenticated} = useAuth0();
    const [searchState, setSearchState] = useState('');
    const [searchResultState, setSearchResultState] = useState([]);

//---------------------------------------------------------------------------------------

    /*
    const server= "192.168.1.10";
    const userPrincipalName="maxmustermann@x-test.local";
    const password= "Pin.1234";
    const adSuffix="dc=x-test,dc=local";



    const client = ldap.createClient({
        url: ['ldap://'+server+':389']
    });

    client.on('error', (err) => {
        // handle connection error
    })

    client.bind(userPrincipalName, password, err => {
        assert.ifError(err)
    });

    // Search AD for user
    const searchOptions = {
        scope: "sub",
        filter: `(userPrincipalName=${userPrincipalName})`
    };

    client.search(adSuffix,searchOptions,(err,res) => {
        assert.ifError(err);

        res.on('searchEntry', entry => {
            console.log(entry.object.name);
        });
        res.on('searchReference', referral => {
            console.log('referral: ' + referral.uris.join());
        });
        res.on('error', err => {
            console.error('error: ' + err.message);
        });
        res.on('end', result => {
            console.log(result);
        });
    });

// Wrap up
    client.unbind( err => {
        assert.ifError(err);
    });

     */




    // active directory library (outdated)


    var config = { url: 'ldap://core1.x-test.local',
        baseDN: 'ou=x-test,dc=x-test,dc=local',
        username: 'maxmusnpm install activedirectory2\ntermann@x-test.local',
        password: 'Pin.1234' }
    var ad = new ActiveDirectory(config)


    //search query
    var _ = require('underscore');
    var query = 'cn=*';
    var opts = {
        includeMembership : ['user'], // Optionally can use 'all'
        includeDeleted : false
    };

    ad.find(query, function(err, results) {
        if ((err) || (! results)) {
            console.log('ERROR: ' + JSON.stringify(err));
            return;
        }

        console.log('Users');
        _.each(results.users, function(user) {
            console.log('  ' + user.cn);
        });
    });





//---------------------------------------------------------------------------------------

    const [people, setPeople] = useState([
        {name: 'David'},
        {name: 'Hans'},
        {name: 'Peter'},
        {name: 'Marvin'},
        {name: 'Oliver'},
        {name: 'Olivia'},
        {name: 'Ollie'},
        {name: 'Oisin'},
        {name: 'Orla'},
        {name: 'Olly'},
        {name: 'Osian'},
        {name: 'Oakley'},
        {name: 'Ophelia'},
        {name: 'Olive'},
        {name: 'Beate'}
    ]);


    /*useEffect(() => {
        console.log(searchState);
    },[searchState])

     */

    const setSearchResultStateToZero = () => {
        setSearchResultState([]);
    }


    const onIDChange = (value) => {
        setSearchState(value);
        console.log(value);

        if (value && value.trim().length > 0) {
            value = value.trim();
            value = capitalizeFirstLetter(value);

            /*window.onkeyup = ($keyboardEvent) => {
                console.log($keyboardEvent.target.value);
            }

             */

            setSearchResultState(people.filter(person => {
                return person.name.includes(value);
            }).sort((personA, personB) => {
                return searchEngine.getRelevancy(personB.name, value) - searchEngine.getRelevancy(personA.name, value);
            }));
        } else {
            setSearchResultStateToZero()
        }
    }

    return (
        isAuthenticated && (

            <div className={""}>
                <div className="wrap-input100 m-l-100 m-t--30 ">
                    <input id="idsearch" autoComplete="off" placeholder="Max Mustermann" className="input100"
                           type="text"
                           name="search" content={searchState} onChange={(e) => onIDChange(e.target.value)}
                           onKeyDown={(EscapeEvent) => {
                               if (EscapeEvent.key==="Escape") {
                                   setSearchResultStateToZero();
                                   document.getElementById("idsearch").value = "";
                               }
                           }
                           }/>
                    <span className="focus-input100" data-placeholder="Max Mustermann"></span>
                </div>

                <div className="wrap-searchbar  list-group pos-relative">
                    <ul className="list-group list-all" id="list" content={searchResultState} >
                        {searchResultState.length > 0 ?
                            searchResultState.map((obj) => {
                                return (
                                    <li className={"list-element"} onClick={(clicklistevent) => {
                                        setSearchResultStateToZero();
                                        document.getElementById("abc").style.visibility = "visible";
                                        document.getElementById("username").innerHTML = obj.name;
                                        document.getElementById("idsearch").value = "";


                                    }

                                    }
                                    >{obj.name}</li>
                                )
                            })

                            : <></>}
                    </ul>
                </div>
            </div>
        )
    )

}

export default Searchbar
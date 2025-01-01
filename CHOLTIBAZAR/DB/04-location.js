const fs = require('fs');

const updateJson = (data) => {
    let divisionId = 1;

    for (const division in data) {
        let districtId = 1;
        data[division] = { id: divisionId, ...data[division] };

        for (const district in data[division]) {
            if (district !== 'id') {
                let upazilaId = 1;
                data[division][district] = { id: districtId, divisionId: divisionId, ...data[division][district] };

                for (const upazila in data[division][district]) {
                    if (upazila !== 'id' && upazila !== 'divisionId') {
                        let subAreaId = 1;
                        data[division][district][upazila] = { id: upazilaId, districtId: districtId, ...data[division][district][upazila] };

                        for (const subArea in data[division][district][upazila]) {
                            if (subArea !== 'id' && subArea !== 'districtId') {
                                data[division][district][upazila][subArea] = { id: subAreaId, upazilaId: upazilaId, ...data[division][district][upazila][subArea] };
                                subAreaId++;
                            }
                        }
                        upazilaId++;
                    }
                }
                districtId++;
            }
        }
        divisionId++;
    }

    return data;
};

const removePrefix = (data) => {
    for (const division in data) {
        for (const district in data[division]) {
            if (district !== 'id') {
                for (const upazila in data[division][district]) {
                    if (upazila !== 'id' && upazila !== 'divisionId') {
                        for (const subArea in data[division][district][upazila]) {
                            if (subArea !== 'id' && subArea !== 'districtId') {
                                if (data[division][district][upazila][subArea].hasOwnProperty('l_id')) {
                                    data[division][district][upazila][subArea].id = data[division][district][upazila][subArea]['l_id'];
                                    delete data[division][district][upazila][subArea]['l_id'];
                                }
                                if (data[division][district][upazila][subArea].hasOwnProperty('l_has_subarea')) {
                                    data[division][district][upazila][subArea].hasSubarea = data[division][district][upazila][subArea]['l_has_subarea'];
                                    delete data[division][district][upazila][subArea]['l_has_subarea'];
                                }
                            }
                        }
                        if (data[division][district][upazila].hasOwnProperty('l_id')) {
                            data[division][district][upazila].id = data[division][district][upazila]['l_id'];
                            delete data[division][district][upazila]['l_id'];
                        }
                        if (data[division][district][upazila].hasOwnProperty('l_has_subarea')) {
                            data[division][district][upazila].hasSubarea = data[division][district][upazila]['l_has_subarea'];
                            delete data[division][district][upazila]['l_has_subarea'];
                        }
                    }
                }
                if (data[division][district].hasOwnProperty('l_id')) {
                    data[division][district].id = data[division][district]['l_id'];
                    delete data[division][district]['l_id'];
                }
                if (data[division][district].hasOwnProperty('l_has_subarea')) {
                    data[division][district].hasSubarea = data[division][district]['l_has_subarea'];
                    delete data[division][district]['l_has_subarea'];
                }
            }
        }
        if (data[division].hasOwnProperty('l_id')) {
            data[division].id = data[division]['l_id'];
            delete data[division]['l_id'];
        }
        if (data[division].hasOwnProperty('l_has_subarea')) {
            data[division].hasSubarea = data[division]['l_has_subarea'];
            delete data[division]['l_has_subarea'];
        }
    }
    return data;
};

// Read the original JSON file
fs.readFile('./all-location.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    let jsonData = JSON.parse(data);
    jsonData = removePrefix(jsonData);
    const updatedJson = updateJson(jsonData);

    // Save the updated JSON to a new file
    fs.writeFile('updated-location.json', JSON.stringify(updatedJson, null, 2), 'utf8', (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log('Updated JSON saved to updated-location.json');
    });
});
/*
 * -> Error Handling
 * Error handling is done using try, catch, and throw, allowing you to capture and manage exceptions without interrupting program execution.
        1️º try → Block where the code is executed.
        2º catch → Block that captures and handles the error if it occurs.
        3º throw → Throws a custom error.
        4º finally (optional) → Executes code regardless of whether an error occurs.
 */

        function handleAndThrowError(error) {
            throw new Error('Something is not quite right');
        }
        
        function printNameShouting(obj) {
            try {
                console.log(obj.name.toUpperCase() + '!!!');
            } catch (e) {
                handleAndThrowError(e);
            } finally {
                console.log('final');
            }
        }
        
        const obj = {names: 'Mary'};
        printNameShouting(obj);
        
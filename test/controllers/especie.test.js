const { getEspecies, getEspecie, postEspecie, putEspecie } = require("../../controllers/especie");

describe("Test para controlador especie", () => {
    const mockRequest = (sessionData) => {
        return {
            session: { data: sessionData}
        };
    };

    const mockResponse = () => {
        const res = {};
        res.status = jest.fn().mockReturnValue(res);
        res.json = jest.fn().mockReturnValue(res);
        return res;
    };
    
    test("1. Error en la función getEspecies", async () => {
        const req = mockRequest();
        const res = mockResponse();
        await getEspecies(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ msg: "Hubo un error" });
    });

    test("2. Error en la función getEspecie", async () => {
        const req = mockRequest();
        const res = mockResponse();
        await getEspecie(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ msg: "Hubo un error" });
    });

    test("3. Error en la función postEspecie", async () => {
        const req = mockRequest();
        const res = mockResponse();
        await postEspecie(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ msg: "Hubo un error" });
    });

    test("4. Error en la función putEspecie", async () => {
        const req = mockRequest();
        const res = mockResponse();
        await putEspecie(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ msg: "Hubo un error" });
    });

});

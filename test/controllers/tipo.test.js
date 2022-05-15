const { getTipos, getTipo, postTipo, putTipo } = require("../../controllers/tipo");

describe("Test para controlador tipo", () => {
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
    
    test("1. Error en la función getTipos", async () => {
        const req = mockRequest();
        const res = mockResponse();
        await getTipos(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ msg: "Hubo un error" });
    });

    test("2. Error en la función getTipo", async () => {
        const req = mockRequest();
        const res = mockResponse();
        await getTipo(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ msg: "Hubo un error" });
    });

    test("3. Error en la función postTipo", async () => {
        const req = mockRequest();
        const res = mockResponse();
        await postTipo(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ msg: "Hubo un error" });
    });

    test("4. Error en la función putTipo", async () => {
        const req = mockRequest();
        const res = mockResponse();
        await putTipo(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ msg: "Hubo un error" });
    });

});

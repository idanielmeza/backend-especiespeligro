const { getTipos, getTipo, postTipo, putTipo } = require("../../controllers/tipo");

describe("Test para controlador tipo", () => {
    const mockRequest = (sessionData) => {
        return {
            session: { data: sessionData}
        }
    }

    const mockResponse = () => {
        const res = {};
        res.status = jest.fn().mockReturnValue(res)
        res.json = jest.fn().mockReturnValue(res)
        return res;
    }
    
    test("1. Error en la función getTipos", async () => {
      const req = mockRequest();
      const res = mockResponse();
      getTipos(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ msg: 'Hubo un error' })
    });

    test("2. Error en la función getTipo", async () => {
        const req = mockRequest();
        const res = mockResponse();
        getTipo(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ msg: 'Hubo un error' })
    });

    test("3. Error en la función postTipo", async () => {
        const req = mockRequest();
        const res = mockResponse();
        postTipo(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ msg: 'Hubo un error' })
    });

    test("4. Error en la función putTipo", async () => {
        const req = mockRequest();
        const res = mockResponse();
        putTipo(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ msg: 'Hubo un error' })
    });

});

package dreamcraft.workhub.service;

import dreamcraft.workhub.dao.DocumentDAO;
import dreamcraft.workhub.model.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DocumentService implements DocumentServiceInterface {
    @Autowired DocumentDAO documentDAO;

    @Override
    public List<Document> selectAll() {
        return documentDAO.findAll();
    }

    @Override
    public Document selectById(String id) {
        return documentDAO.findById(id).get();
    }

    @Override
    public void save(Document document) {
        documentDAO.save(document);
    }

    @Override
    public void delete(Document document) {
        documentDAO.delete(document);
    }
}

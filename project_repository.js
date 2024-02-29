class ProjectRepository {
    constructor(dao) {
      this.dao = dao
    }
  
    getById(id) {
      return this.dao.get(
        `SELECT * FROM nvd WHERE id = ?`,
        [id])
    }

    getAll() {
        return this.dao.all(`SELECT * FROM nvd`)
    }
    
    get5() {
        return this.dao.all(`SELECT * FROM nvd LIMIT 5`)
    }

  }
  
  module.exports = ProjectRepository;
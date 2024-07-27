const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://princymoljoseph:IxtVIf2mR7JCkC4m@cluster0.xsykx8r.mongodb.net/ICT_FinalProject', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const projectSchema = new mongoose.Schema({
  projectId: String,
  projectName: String,
  reference1: String,
  reference2: String,
  reference3: String,
  reference4: String,
});

const Project = mongoose.model('Project', projectSchema);

app.get('/projects/:projectId', async (req, res) => {
  try {
    const project = await Project.findOne({ projectId: req.params.projectId });
    if (project) {
      res.json(project);
    } else {
      res.status(404).json({ message: 'Project not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

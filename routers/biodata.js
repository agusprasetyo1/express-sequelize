const express = require('express')
const router = express.Router()
const biodataController = require('../controllers/biodataController')

router.get('/', biodataController.index)

router.get('/create', biodataController.create)
router.post('/create', biodataController.store)
router.get('/:id/edit', biodataController.edit)
router.put('/:id', biodataController.update)
router.delete('/:id', biodataController.destroy)
//Seharusnnya menggunakan router.put
// router.get('/', (req, res) => {
//     res.render('biodata/index', {
//         judul: "Mencoba",
//         nama: "Melkan",
//         jurusan: "Rekayasa Perangkat Lunak",
//         absen: 1,
//         alamat: "Gesikharjo",
//         jk: "Laki-laki"
//     })
// })
// router.get('/create', (req, res) => {
//     res.render('biodata/create', {
//         judul: 'Tambah siswa'
//     })
// })

// router.post('/create', (req, res) => {
//     console.log(req.body);
// })

module.exports = router
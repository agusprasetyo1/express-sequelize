const express = require('express')
const router = express.Router()
const biodataModel = require('../models/biodata') //memanggil model pada folder 'models'

router.get('/', (req, res) => { //Untuk Menampilkan
    biodataModel.findAll()
        .then(data => {
            res.render('biodata/index', {
                nomer: 1,
                title: 'Biodata',
                data: data
            })
        })
        .catch(err => {
            res.json("Something error => " + err)
        })
})
router.get('/create', (req, res) => { //Menampilkan form inputan penambahan
    res.render('biodata/create', {
        title: 'Tambah siswa'
    })
})
router.post('/create', (req, res) => { //Menyimpan inputan penambahan
    let data = req.body
    biodataModel.create({
            nama: data.nama,
            jurusan: data.jurusan,
            absen: data.absen,
            alamat: data.alamat,
            jk: data.jk
        })
        .then(() => {
            res.redirect('/biodata')
        })
        .catch((err) => {
            res.json('Something error ' + err)
        })
})
router.get('/:id/edit', (req, res) => { //Menampilkan form inputan edit
    biodataModel.findAll({
            where: {
                id: req.params.id
            }
        })
        .then((data) => {
            if (data[0].id == req.params.id) {
                res.render('biodata/edit', {
                    title: 'Edit siswa',
                    data: data
                })
            }
        })
        .catch((err) => {
            res.json('Something error => ' + err + " Status code " + res.statusCode)
        })
})
router.put('/:id', (req, res) => { //Menyimpan inputan edit
    biodataModel.findByPrimary(req.params.id)
        .then(data => {
            data.update({
                nama: req.body.nama,
                jurusan: req.body.jurusan,
                absen: req.body.absen,
                alamat: req.body.alamat,
                jk: req.body.jk
            })
            res.send('<script>alert("Update data sukses"); window.location="/biodata";</script>')
        })
        .catch((err) => {
            res.json('Something error ' + err)
        })
})
router.delete('/:id', (req, res) => { //Untuk menghapus
    biodataModel.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(deleteData => {
            if (deleteData === 1) {
                res.send('<script>alert("Data berhasil dihapus"); window.location.href="/biodata";</script>')
            } else {
                res.send('<script>alert("Data tidak ditemukan"); window.location.href="/biodata";</script>')
            }
        })

        .catch(err => {
            res.status(500).json(err)
        })
})

module.exports = router
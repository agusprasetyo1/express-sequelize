const biodata = require('../models/biodata')

const biodataController = {
    index: (req, res) => {
        biodata.findAll()
            .then((data) => {
                res.render('biodata/index', {
                    nomer: 1,
                    title: 'Biodata',
                    data: data
                })
            })
            .catch((err) => {
                res.json("Something error " + err)
            })
    },
    create: (req, res) => {
        res.render('biodata/create', {
            title: 'Tambah siswa'
        })
    },

    store: (req, res) => {
        let data = req.body
        biodata.create({
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
    },

    edit: (req, res) => {
        biodata.findAll({
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
    },

    update: (req, res) => {
        biodata.findByPrimary(req.params.id)
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
    },

    destroy: (req, res) => {
        biodata.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(deleteData => {
                if (deleteData === 1) {
                    res.status(200).json({
                        message: "Hapus data sukses"
                    })
                } else {
                    res.status(404).json({
                        message: "Hapus data gagal"
                    })
                }
            })

            .catch(err => {
                res.status(500).json(err)
            })
    }
}

module.exports = biodataController
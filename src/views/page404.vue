<script>
export default {
    data() {
        return{}
    },
    methods: {
        goBack: function() {
            this.$router.push('/')
        }
    },
    render() {
        return(
            <a-result status="404" title="404" sub-title="Sorry, the page you visited does not exist.">
                <a-button type="primary" onClick={this.goBack}>
                    Back
                </a-button>
            </a-result>
        )
    }
}
</script>
<style lang="less">
    .ant-result-content {
        text-align: center;
    }
</style>